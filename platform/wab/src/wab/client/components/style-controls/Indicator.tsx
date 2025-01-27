// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { Popover, Tooltip } from "antd";
import { RenderFunction, TooltipPlacement } from "antd/lib/tooltip";
import * as React from "react";
import {
  DefaultIndicatorProps,
  PlasmicIndicator,
} from "../../plasmic/plasmic_kit_design_system/PlasmicIndicator";

interface IndicatorProps extends Omit<DefaultIndicatorProps, "color"> {
  tooltip?: React.ReactNode | RenderFunction;
  popover?: React.ReactNode | RenderFunction;
  popoverTitle?: React.ReactNode | RenderFunction;
  placement?: TooltipPlacement;
  color: string;
}

function Indicator(props: IndicatorProps) {
  const { tooltip, popover, popoverTitle, placement, color, ...rest } = props;

  let result = (
    <PlasmicIndicator
      {...rest}
      dot={{ style: color ? { background: color } : {} }}
    />
  );

  if (tooltip) {
    result = (
      <Tooltip placement={placement} title={tooltip}>
        {result}
      </Tooltip>
    );
  }
  if (popover) {
    result = (
      <Popover
        overlayClassName="defined-indicator__popover group"
        title={popoverTitle}
        placement={placement}
        content={popover}
        onVisibleChange={(visible) => {
          console.log("Visible", visible);
        }}
      >
        {result}
      </Popover>
    );
  }

  return result;
}

export default Indicator;
