// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: -L2zZ5Mvmr

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import MenuButton from "../../components/widgets/MenuButton"; // plasmic-import: h69wHrrKtL/component
import Indicator from "../../components/style-controls/Indicator"; // plasmic-import: KRNHR6lpj1/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicLabeledListItem.module.css"; // plasmic-import: -L2zZ5Mvmr/css

import GripsvgIcon from "../plasmic_kit_q_4_icons/icons/PlasmicIcon__Gripsvg"; // plasmic-import: jxIRSIMqs/icon
import WildcardIcon from "../plasmic_kit_style_controls/icons/PlasmicIcon__Wildcard"; // plasmic-import: 47qMNx3RV/icon
import TrashIcon from "../plasmic_kit/PlasmicIcon__Trash"; // plasmic-import: 7bxap5bzcUODa/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicLabeledListItem__VariantMembers = {
  valueSetState: "isSet" | "isInherited" | "isUnset";
  noLabel: "noLabel";
  draggable: "draggable";
  dragging: "dragging";
  deletable: "deletable";
  clickable: "clickable";
  withMenu: "withMenu";
  nesting: "simple" | "double" | "labelOnly";
  alignment: "center" | "top";
  padding: "noLabel" | "noContent" | "noHorizontal";
  truncateLabel: "truncateLabel";
  withSubtitle: "withSubtitle";
  showMoreActions: "showMoreActions";
  withIcon: "withIcon";
  layout: "vertical";
  labelSize: "half" | "auto" | "small";
  withIndicator: "withIndicator";
  autoWidth: "autoWidth";
  contentAlignment: "right";
};
export type PlasmicLabeledListItem__VariantsArgs = {
  valueSetState?: SingleChoiceArg<"isSet" | "isInherited" | "isUnset">;
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  draggable?: SingleBooleanChoiceArg<"draggable">;
  dragging?: SingleBooleanChoiceArg<"dragging">;
  deletable?: SingleBooleanChoiceArg<"deletable">;
  clickable?: SingleBooleanChoiceArg<"clickable">;
  withMenu?: SingleBooleanChoiceArg<"withMenu">;
  nesting?: SingleChoiceArg<"simple" | "double" | "labelOnly">;
  alignment?: SingleChoiceArg<"center" | "top">;
  padding?: MultiChoiceArg<"noLabel" | "noContent" | "noHorizontal">;
  truncateLabel?: SingleBooleanChoiceArg<"truncateLabel">;
  withSubtitle?: SingleBooleanChoiceArg<"withSubtitle">;
  showMoreActions?: SingleBooleanChoiceArg<"showMoreActions">;
  withIcon?: SingleBooleanChoiceArg<"withIcon">;
  layout?: SingleChoiceArg<"vertical">;
  labelSize?: SingleChoiceArg<"half" | "auto" | "small">;
  withIndicator?: SingleBooleanChoiceArg<"withIndicator">;
  autoWidth?: SingleBooleanChoiceArg<"autoWidth">;
  contentAlignment?: SingleChoiceArg<"right">;
};
type VariantPropType = keyof PlasmicLabeledListItem__VariantsArgs;
export const PlasmicLabeledListItem__VariantProps = new Array<VariantPropType>(
  "valueSetState",
  "noLabel",
  "draggable",
  "dragging",
  "deletable",
  "clickable",
  "withMenu",
  "nesting",
  "alignment",
  "padding",
  "truncateLabel",
  "withSubtitle",
  "showMoreActions",
  "withIcon",
  "layout",
  "labelSize",
  "withIndicator",
  "autoWidth",
  "contentAlignment"
);

export type PlasmicLabeledListItem__ArgsType = {
  label?: React.ReactNode;
  styleProp?: string;
  onDeletionRequest?: () => void;
  onClick?: () => void;
  moreActionButtons?: React.ReactNode;
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
};
type ArgPropType = keyof PlasmicLabeledListItem__ArgsType;
export const PlasmicLabeledListItem__ArgProps = new Array<ArgPropType>(
  "label",
  "styleProp",
  "onDeletionRequest",
  "onClick",
  "moreActionButtons",
  "children",
  "subtitle",
  "icon"
);

export type PlasmicLabeledListItem__OverridesType = {
  root?: p.Flex<"div">;
  grip?: p.Flex<"svg">;
  labelContainer?: p.Flex<"div">;
  spacer?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  iconContainer?: p.Flex<"div">;
  labelTextContainer?: p.Flex<"div">;
  spacer2?: p.Flex<"div">;
  contentContainer?: p.Flex<"div">;
  actionsContainer?: p.Flex<"div">;
  deleteButton?: p.Flex<typeof IconButton>;
  menuButton?: p.Flex<typeof MenuButton>;
  indicatorContainer?: p.Flex<"div">;
  indicator?: p.Flex<typeof Indicator>;
};

export interface DefaultLabeledListItemProps {
  label?: React.ReactNode;
  styleProp?: string;
  onDeletionRequest?: () => void;
  onClick?: () => void;
  moreActionButtons?: React.ReactNode;
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  valueSetState?: SingleChoiceArg<"isSet" | "isInherited" | "isUnset">;
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  draggable?: SingleBooleanChoiceArg<"draggable">;
  dragging?: SingleBooleanChoiceArg<"dragging">;
  deletable?: SingleBooleanChoiceArg<"deletable">;
  clickable?: SingleBooleanChoiceArg<"clickable">;
  withMenu?: SingleBooleanChoiceArg<"withMenu">;
  nesting?: SingleChoiceArg<"simple" | "double" | "labelOnly">;
  alignment?: SingleChoiceArg<"center" | "top">;
  padding?: MultiChoiceArg<"noLabel" | "noContent" | "noHorizontal">;
  truncateLabel?: SingleBooleanChoiceArg<"truncateLabel">;
  withSubtitle?: SingleBooleanChoiceArg<"withSubtitle">;
  showMoreActions?: SingleBooleanChoiceArg<"showMoreActions">;
  withIcon?: SingleBooleanChoiceArg<"withIcon">;
  layout?: SingleChoiceArg<"vertical">;
  labelSize?: SingleChoiceArg<"half" | "auto" | "small">;
  withIndicator?: SingleBooleanChoiceArg<"withIndicator">;
  autoWidth?: SingleBooleanChoiceArg<"autoWidth">;
  contentAlignment?: SingleChoiceArg<"right">;
  className?: string;
}

const $$ = {};

function PlasmicLabeledListItem__RenderFunc(props: {
  variants: PlasmicLabeledListItem__VariantsArgs;
  args: PlasmicLabeledListItem__ArgsType;
  overrides: PlasmicLabeledListItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          styleProp: "",
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "valueSetState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.valueSetState,
      },
      {
        path: "noLabel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLabel,
      },
      {
        path: "draggable",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.draggable,
      },
      {
        path: "deletable",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.deletable,
      },
      {
        path: "dragging",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.dragging,
      },
      {
        path: "clickable",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.clickable,
      },
      {
        path: "withMenu",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withMenu,
      },
      {
        path: "nesting",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.nesting,
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "",
      },
      {
        path: "alignment",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.alignment,
      },
      {
        path: "padding",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.padding,
      },
      {
        path: "truncateLabel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.truncateLabel,
      },
      {
        path: "withSubtitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withSubtitle,
      },
      {
        path: "showMoreActions",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.showMoreActions,
      },
      {
        path: "withIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withIcon,
      },
      {
        path: "layout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.layout,
      },
      {
        path: "labelSize",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.labelSize,
      },
      {
        path: "withIndicator",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withIndicator,
      },
      {
        path: "autoWidth",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.autoWidth,
      },
      {
        path: "contentAlignment",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.contentAlignment,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootalignment_center]: hasVariant($state, "alignment", "center"),
          [sty.rootalignment_top]: hasVariant($state, "alignment", "top"),
          [sty.rootautoWidth]: hasVariant($state, "autoWidth", "autoWidth"),
          [sty.rootclickable]: hasVariant($state, "clickable", "clickable"),
          [sty.rootdeletable]: hasVariant($state, "deletable", "deletable"),
          [sty.rootdraggable]: hasVariant($state, "draggable", "draggable"),
          [sty.rootdragging]: hasVariant($state, "dragging", "dragging"),
          [sty.rootlayout_vertical]: hasVariant($state, "layout", "vertical"),
          [sty.rootnesting_double]: hasVariant($state, "nesting", "double"),
          [sty.rootnesting_simple]: hasVariant($state, "nesting", "simple"),
          [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel"),
          [sty.rootpadding_noHorizontal]: hasVariant(
            $state,
            "padding",
            "noHorizontal"
          ),
          [sty.rootshowMoreActions]: hasVariant(
            $state,
            "showMoreActions",
            "showMoreActions"
          ),
          [sty.roottruncateLabel]: hasVariant(
            $state,
            "truncateLabel",
            "truncateLabel"
          ),
          [sty.rootvalueSetState_isSet]: hasVariant(
            $state,
            "valueSetState",
            "isSet"
          ),
          [sty.rootwithMenu]: hasVariant($state, "withMenu", "withMenu"),
          [sty.rootwithSubtitle]: hasVariant(
            $state,
            "withSubtitle",
            "withSubtitle"
          ),
        }
      )}
      onClick={async (event) => {
        const $steps = {};

        $steps["invokeOnClick"] = true
          ? (() => {
              const actionArgs = { eventRef: $props["onClick"] };
              return (({ eventRef, args }) => {
                return eventRef?.(...(args ?? []));
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          typeof $steps["invokeOnClick"] === "object" &&
          typeof $steps["invokeOnClick"].then === "function"
        ) {
          $steps["invokeOnClick"] = await $steps["invokeOnClick"];
        }
      }}
    >
      {(
        hasVariant($state, "dragging", "dragging")
          ? true
          : hasVariant($state, "draggable", "draggable")
          ? true
          : false
      ) ? (
        <GripsvgIcon
          data-plasmic-name={"grip"}
          data-plasmic-override={overrides.grip}
          className={classNames(projectcss.all, sty.grip, {
            [sty.gripdraggable]: hasVariant($state, "draggable", "draggable"),
            [sty.gripdragging]: hasVariant($state, "dragging", "dragging"),
            [sty.griplayout_vertical]: hasVariant($state, "layout", "vertical"),
          })}
          role={"img"}
        />
      ) : null}
      {(hasVariant($state, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContaineralignment_center]: hasVariant(
              $state,
              "alignment",
              "center"
            ),
            [sty.labelContaineralignment_top]: hasVariant(
              $state,
              "alignment",
              "top"
            ),
            [sty.labelContainerdeletable]: hasVariant(
              $state,
              "deletable",
              "deletable"
            ),
            [sty.labelContainerdraggable]: hasVariant(
              $state,
              "draggable",
              "draggable"
            ),
            [sty.labelContainerdragging]: hasVariant(
              $state,
              "dragging",
              "dragging"
            ),
            [sty.labelContainerlabelSize_auto]: hasVariant(
              $state,
              "labelSize",
              "auto"
            ),
            [sty.labelContainerlabelSize_half]: hasVariant(
              $state,
              "labelSize",
              "half"
            ),
            [sty.labelContainerlabelSize_small]: hasVariant(
              $state,
              "labelSize",
              "small"
            ),
            [sty.labelContainerlayout_vertical]: hasVariant(
              $state,
              "layout",
              "vertical"
            ),
            [sty.labelContainernesting_double]: hasVariant(
              $state,
              "nesting",
              "double"
            ),
            [sty.labelContainernesting_simple]: hasVariant(
              $state,
              "nesting",
              "simple"
            ),
            [sty.labelContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            ),
            [sty.labelContainerpadding_noLabel]: hasVariant(
              $state,
              "padding",
              "noLabel"
            ),
            [sty.labelContainervalueSetState_isInherited]: hasVariant(
              $state,
              "valueSetState",
              "isInherited"
            ),
            [sty.labelContainervalueSetState_isSet]: hasVariant(
              $state,
              "valueSetState",
              "isSet"
            ),
            [sty.labelContainerwithIcon]: hasVariant(
              $state,
              "withIcon",
              "withIcon"
            ),
            [sty.labelContainerwithMenu]: hasVariant(
              $state,
              "withMenu",
              "withMenu"
            ),
          })}
        >
          <div
            data-plasmic-name={"spacer"}
            data-plasmic-override={overrides.spacer}
            className={classNames(projectcss.all, sty.spacer, {
              [sty.spacerlayout_vertical]: hasVariant(
                $state,
                "layout",
                "vertical"
              ),
            })}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox, {
              [sty.freeBoxlabelSize_half]: hasVariant(
                $state,
                "labelSize",
                "half"
              ),
              [sty.freeBoxlabelSize_small]: hasVariant(
                $state,
                "labelSize",
                "small"
              ),
              [sty.freeBoxlayout_vertical]: hasVariant(
                $state,
                "layout",
                "vertical"
              ),
              [sty.freeBoxnesting_labelOnly]: hasVariant(
                $state,
                "nesting",
                "labelOnly"
              ),
              [sty.freeBoxwithIcon]: hasVariant($state, "withIcon", "withIcon"),
            })}
          >
            {(hasVariant($state, "withIcon", "withIcon") ? true : false) ? (
              <div
                data-plasmic-name={"iconContainer"}
                data-plasmic-override={overrides.iconContainer}
                className={classNames(
                  projectcss.all,
                  sty.iconContainer,
                  "baseline-friendly-centered-block-container",
                  {
                    [sty.iconContainerwithIcon]: hasVariant(
                      $state,
                      "withIcon",
                      "withIcon"
                    ),
                  }
                )}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <WildcardIcon
                      className={classNames(projectcss.all, sty.svg__k5Ltc)}
                      role={"img"}
                    />
                  ),

                  value: args.icon,
                })}
              </div>
            ) : null}
            <div
              data-plasmic-name={"labelTextContainer"}
              data-plasmic-override={overrides.labelTextContainer}
              className={classNames(projectcss.all, sty.labelTextContainer)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Label",
                value: args.label,
                className: classNames(sty.slotTargetLabel, {
                  [sty.slotTargetLabeldeletable]: hasVariant(
                    $state,
                    "deletable",
                    "deletable"
                  ),
                  [sty.slotTargetLabellayout_vertical]: hasVariant(
                    $state,
                    "layout",
                    "vertical"
                  ),
                  [sty.slotTargetLabelnesting_double]: hasVariant(
                    $state,
                    "nesting",
                    "double"
                  ),
                  [sty.slotTargetLabelnesting_simple]: hasVariant(
                    $state,
                    "nesting",
                    "simple"
                  ),
                  [sty.slotTargetLabeltruncateLabel]: hasVariant(
                    $state,
                    "truncateLabel",
                    "truncateLabel"
                  ),
                  [sty.slotTargetLabelvalueSetState_isInherited]: hasVariant(
                    $state,
                    "valueSetState",
                    "isInherited"
                  ),
                  [sty.slotTargetLabelvalueSetState_isSet]: hasVariant(
                    $state,
                    "valueSetState",
                    "isSet"
                  ),
                  [sty.slotTargetLabelvalueSetState_isUnset]: hasVariant(
                    $state,
                    "valueSetState",
                    "isUnset"
                  ),
                  [sty.slotTargetLabelwithIndicator_padding_noHorizontal]:
                    hasVariant($state, "withIndicator", "withIndicator") &&
                    hasVariant($state, "padding", "noHorizontal"),
                  [sty.slotTargetLabelwithMenu]: hasVariant(
                    $state,
                    "withMenu",
                    "withMenu"
                  ),
                  [sty.slotTargetLabelwithSubtitle]: hasVariant(
                    $state,
                    "withSubtitle",
                    "withSubtitle"
                  ),
                }),
              })}
            </div>
          </div>
          {(hasVariant($state, "withSubtitle", "withSubtitle") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__u1Jb1
                    )}
                  >
                    {"Enter some text"}
                  </div>
                ),
                value: args.subtitle,
                className: classNames(sty.slotTargetSubtitle, {
                  [sty.slotTargetSubtitlewithSubtitle]: hasVariant(
                    $state,
                    "withSubtitle",
                    "withSubtitle"
                  ),
                }),
              })
            : null}
          <div
            data-plasmic-name={"spacer2"}
            data-plasmic-override={overrides.spacer2}
            className={classNames(projectcss.all, sty.spacer2, {
              [sty.spacer2layout_vertical]: hasVariant(
                $state,
                "layout",
                "vertical"
              ),
            })}
          />
        </div>
      ) : null}
      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContaineralignment_top]: hasVariant(
            $state,
            "alignment",
            "top"
          ),
          [sty.contentContainerautoWidth]: hasVariant(
            $state,
            "autoWidth",
            "autoWidth"
          ),
          [sty.contentContainercontentAlignment_right]: hasVariant(
            $state,
            "contentAlignment",
            "right"
          ),
          [sty.contentContainerdeletable]: hasVariant(
            $state,
            "deletable",
            "deletable"
          ),
          [sty.contentContainerlabelSize_half]: hasVariant(
            $state,
            "labelSize",
            "half"
          ),
          [sty.contentContainerlayout_vertical]: hasVariant(
            $state,
            "layout",
            "vertical"
          ),
          [sty.contentContainerpadding_noContent]: hasVariant(
            $state,
            "padding",
            "noContent"
          ),
          [sty.contentContainerwithMenu]: hasVariant(
            $state,
            "withMenu",
            "withMenu"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xVFjy
              )}
            >
              {"One line"}
            </div>
          ),
          value: args.children,
        })}
      </div>
      <div
        data-plasmic-name={"actionsContainer"}
        data-plasmic-override={overrides.actionsContainer}
        className={classNames(projectcss.all, sty.actionsContainer, {
          [sty.actionsContainerdeletable]: hasVariant(
            $state,
            "deletable",
            "deletable"
          ),
          [sty.actionsContainerlayout_vertical]: hasVariant(
            $state,
            "layout",
            "vertical"
          ),
          [sty.actionsContainershowMoreActions]: hasVariant(
            $state,
            "showMoreActions",
            "showMoreActions"
          ),
          [sty.actionsContainervalueSetState_isSet]: hasVariant(
            $state,
            "valueSetState",
            "isSet"
          ),
          [sty.actionsContainerwithMenu]: hasVariant(
            $state,
            "withMenu",
            "withMenu"
          ),
        })}
      >
        {(
          hasVariant($state, "showMoreActions", "showMoreActions")
            ? true
            : false
        )
          ? p.renderPlasmicSlot({
              defaultContents: null,
              value: args.moreActionButtons,
            })
          : null}
        {(hasVariant($state, "deletable", "deletable") ? true : false) ? (
          <IconButton
            data-plasmic-name={"deleteButton"}
            data-plasmic-override={overrides.deleteButton}
            children2={
              <ChevronDownsvgIcon
                className={classNames(projectcss.all, sty.svg___9TaH7)}
                role={"img"}
              />
            }
            className={classNames("__wab_instance", sty.deleteButton, {
              [sty.deleteButtondeletable]: hasVariant(
                $state,
                "deletable",
                "deletable"
              ),
              [sty.deleteButtonwithMenu]: hasVariant(
                $state,
                "withMenu",
                "withMenu"
              ),
            })}
            size={"vertical"}
            type={["seamless"]}
          >
            <TrashIcon
              className={classNames(projectcss.all, sty.svg__dp5Pt, {
                [sty.svgwithMenu__dp5PtXDsyq]: hasVariant(
                  $state,
                  "withMenu",
                  "withMenu"
                ),
              })}
              role={"img"}
            />
          </IconButton>
        ) : null}
        <MenuButton
          data-plasmic-name={"menuButton"}
          data-plasmic-override={overrides.menuButton}
          className={classNames("__wab_instance", sty.menuButton, {
            [sty.menuButtonwithMenu]: hasVariant(
              $state,
              "withMenu",
              "withMenu"
            ),
          })}
          type={"seamless"}
        />
      </div>
      {(hasVariant($state, "withIndicator", "withIndicator") ? true : false) ? (
        <div
          data-plasmic-name={"indicatorContainer"}
          data-plasmic-override={overrides.indicatorContainer}
          className={classNames(projectcss.all, sty.indicatorContainer, {
            [sty.indicatorContainerlayout_vertical]: hasVariant(
              $state,
              "layout",
              "vertical"
            ),
            [sty.indicatorContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            ),
            [sty.indicatorContainervalueSetState_isSet]: hasVariant(
              $state,
              "valueSetState",
              "isSet"
            ),
            [sty.indicatorContainerwithIndicator]: hasVariant(
              $state,
              "withIndicator",
              "withIndicator"
            ),
            [sty.indicatorContainerwithIndicator_padding_noHorizontal]:
              hasVariant($state, "withIndicator", "withIndicator") &&
              hasVariant($state, "padding", "noHorizontal"),
          })}
        >
          <Indicator
            data-plasmic-name={"indicator"}
            data-plasmic-override={overrides.indicator}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "grip",
    "labelContainer",
    "spacer",
    "freeBox",
    "iconContainer",
    "labelTextContainer",
    "spacer2",
    "contentContainer",
    "actionsContainer",
    "deleteButton",
    "menuButton",
    "indicatorContainer",
    "indicator",
  ],
  grip: ["grip"],
  labelContainer: [
    "labelContainer",
    "spacer",
    "freeBox",
    "iconContainer",
    "labelTextContainer",
    "spacer2",
  ],
  spacer: ["spacer"],
  freeBox: ["freeBox", "iconContainer", "labelTextContainer"],
  iconContainer: ["iconContainer"],
  labelTextContainer: ["labelTextContainer"],
  spacer2: ["spacer2"],
  contentContainer: ["contentContainer"],
  actionsContainer: ["actionsContainer", "deleteButton", "menuButton"],
  deleteButton: ["deleteButton"],
  menuButton: ["menuButton"],
  indicatorContainer: ["indicatorContainer", "indicator"],
  indicator: ["indicator"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  grip: "svg";
  labelContainer: "div";
  spacer: "div";
  freeBox: "div";
  iconContainer: "div";
  labelTextContainer: "div";
  spacer2: "div";
  contentContainer: "div";
  actionsContainer: "div";
  deleteButton: typeof IconButton;
  menuButton: typeof MenuButton;
  indicatorContainer: "div";
  indicator: typeof Indicator;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLabeledListItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLabeledListItem__VariantsArgs;
    args?: PlasmicLabeledListItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLabeledListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLabeledListItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLabeledListItem__ArgProps,
          internalVariantPropNames: PlasmicLabeledListItem__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLabeledListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLabeledListItem";
  } else {
    func.displayName = `PlasmicLabeledListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicLabeledListItem = Object.assign(
  // Top-level PlasmicLabeledListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    grip: makeNodeComponent("grip"),
    labelContainer: makeNodeComponent("labelContainer"),
    spacer: makeNodeComponent("spacer"),
    freeBox: makeNodeComponent("freeBox"),
    iconContainer: makeNodeComponent("iconContainer"),
    labelTextContainer: makeNodeComponent("labelTextContainer"),
    spacer2: makeNodeComponent("spacer2"),
    contentContainer: makeNodeComponent("contentContainer"),
    actionsContainer: makeNodeComponent("actionsContainer"),
    deleteButton: makeNodeComponent("deleteButton"),
    menuButton: makeNodeComponent("menuButton"),
    indicatorContainer: makeNodeComponent("indicatorContainer"),
    indicator: makeNodeComponent("indicator"),

    // Metadata about props expected for PlasmicLabeledListItem
    internalVariantProps: PlasmicLabeledListItem__VariantProps,
    internalArgProps: PlasmicLabeledListItem__ArgProps,
  }
);

export default PlasmicLabeledListItem;
/* prettier-ignore-end */