import {
  Component,
  ensureKnownVariantsRef,
  isKnownRenderExpr,
  isKnownStateParam,
  Param,
  Site,
  State,
  TplComponent,
  TplNode,
  Variant,
} from "../classes";
import { assert, isNonNil } from "../common";
import { removeFromArray } from "../commons/collections";
import {
  ensureCorrectImplicitStates,
  isPublicState,
  removeComponentState,
} from "../states";
import { isTplComponent } from "../tpls";
import { componentToDeepReferenced } from "./cached-selectors";
import { wabToTsType } from "./core/model-util";
import { isSlot } from "./SlotUtils";
import { $$$ } from "./TplQuery";
import { UserError } from "./UserError";
import { isStandaloneVariantGroup } from "./Variants";

export function makeComponentSwapper(
  site: Site,
  fromComp: Component,
  toComp: Component
) {
  if (componentToDeepReferenced(toComp).has(fromComp)) {
    throw new UserError(
      `Cannot replace components`,
      `Component "${toComp.name}" is using instances of component "${fromComp.name}"; swapping would lead to component cycles.`
    );
  }

  const getParamType = (comp: Component, param: Param) => {
    const vg = comp.variantGroups.find((g) => g.param === param);
    if (vg) {
      if (isStandaloneVariantGroup(vg)) {
        return "toggle-group";
      } else if (vg.multi) {
        return "multi-group";
      } else {
        return "single-group";
      }
    } else if (isSlot(param)) {
      return "slot";
    } else {
      return wabToTsType(param.type);
    }
  };

  const paramMap = new Map<Param, Param>();
  for (const fromParam of fromComp.params) {
    const fromParamType = getParamType(fromComp, fromParam);
    const toParam = toComp.params.find(
      (p) => p.variable.name === fromParam.variable.name
    );
    if (toParam && fromParamType === getParamType(toComp, toParam)) {
      // Only allow this mapping if the param type matches
      paramMap.set(fromParam, toParam);
    }
  }

  const publicStateMap = new Map<State, State>();
  for (const fromState of fromComp.states) {
    // We only attempt to preserve public explicit states
    if (isPublicState(fromState) && !fromState.implicitState) {
      const toState = toComp.states.find(
        (s) => s.param.variable.name === fromState.param.variable.name
      );
      if (
        toState &&
        isPublicState(toState) &&
        !toState.implicitState &&
        toState.variableType === fromState.variableType &&
        fromState.onChangeParam.variable.name ===
          toState.onChangeParam.variable.name
      ) {
        publicStateMap.set(fromState, toState);
      }
    }
  }

  const variantMap = new Map<Variant, Variant>();
  for (const fromGroup of fromComp.variantGroups) {
    const toGroup = toComp.variantGroups.find(
      (g) => g.param.variable.name === fromGroup.param.variable.name
    );
    if (!toGroup) {
      continue;
    }

    for (const fromVariant of fromGroup.variants) {
      const toVariant = toGroup.variants.find(
        (v) => v.name === fromVariant.name
      );
      if (toVariant) {
        variantMap.set(fromVariant, toVariant);
      }
    }
  }

  const toVariantGroupParams = new Set(
    toComp.variantGroups.map((g) => g.param)
  );

  const swapTplComponent = (tpl: TplComponent, owner: Component) => {
    assert(
      tpl.component === fromComp,
      "Expected tpl to be a tpl component of fromComp"
    );
    for (const vs of tpl.vsettings) {
      for (const arg of [...vs.args]) {
        const toParam = paramMap.get(arg.param);
        if (!toParam) {
          // No corresponding param!  Removing this arg
          if (isKnownRenderExpr(arg.expr)) {
            // carefully detach tpl tree in the arg, if this was
            // a slot arg
            $$$(arg.expr.tpl).remove({ deep: true });
          }
          removeFromArray(vs.args, arg);
        } else if (
          isKnownStateParam(toParam) &&
          toVariantGroupParams.has(toParam)
        ) {
          // A variants arg; map to new variants
          const expr = ensureKnownVariantsRef(arg.expr);
          const fromVariants = expr.variants;
          const toVariants = fromVariants
            .map((v) => variantMap.get(v))
            .filter(isNonNil);
          expr.variants = toVariants;
          arg.param = toParam;
        } else {
          // Pray for the best
          arg.param = toParam;
        }
      }
    }

    tpl.component = toComp;

    // Now we need to fix up the implicit states
    const tplStates = owner.states.filter((s) => s.tplNode === tpl);
    for (const tplState of tplStates) {
      if (tplState.implicitState) {
        if (publicStateMap.has(tplState.implicitState)) {
          // We've found a compatible matching state for the toComp,
          // so we swap out the implicitState reference here
          tplState.implicitState = publicStateMap.get(tplState.implicitState);
        } else {
          // No matching state, so we remove the implicit state
          // from the owning component
          removeComponentState(site, owner, tplState);
        }
      }
    }

    // Finally, we make sure we create the implicit states we should have
    ensureCorrectImplicitStates(site, owner, tpl);
  };

  return (tpl: TplNode, owner: Component) => {
    if (isTplComponent(tpl) && tpl.component === fromComp) {
      swapTplComponent(tpl, owner);
    }
  };
}
