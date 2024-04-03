import { useMemo, useState } from "react";
import ReactFlow from "react-flow-renderer";

import React from "react";
import { ICampaign } from "../types/campaign.type";
import { generateFlow } from "../utils";
import FullNode from "./FullNode";
import Node from "./Node";
import Popover from "./Popover";

const Flow = ({ mode, steps }: { mode: string; steps: ICampaign[] }) => {
  const [stepDetails, setStepDetails] = useState<any>(null);

  const nodeTypes: any = {
    basic: mode === "fullscreen" ? FullNode : Node,
  };

  const elements: any = useMemo(() => {
    const width = mode === "profile" ? 250 : 400;
    const height = mode === "profile" ? 140 : 390;
    const flow = generateFlow(width, height, steps);
    const forConcat: any = steps
      .map(({ id, previous }) =>
        previous.map(({ stepId: previousId }) => ({
          id: `${mode}-${id}-${previousId}`,
          source: `${mode}-${previousId}`,
          target: `${mode}-${id}`,
          arrowHeadType: "none",
          style: {
            strokeWidth: 2,
            stroke: "rgb(152,152,152)",
          },
          type: "smoothstep",
          // label: `${label ? label + ': ' : ''}${count}`,
          labelShowBg: false,
          labelBgPadding: [10, 5],
          labelBgBorderRadius: 4,
          labelStyle: {
            fontFamily: "Roboto, sans-serif",
            fontSize: 15,
          },
          labelBgStyle: {
            fill: "rgb(217,217,217)",
            stroke: "rgb(152,152,152)",
          },
        }))
      )
      .flat();
    const elements: any = flow
      .map((node) => ({
        id: `${mode}-${node?.x}`,
        type: "basic",
        data: { ...node },
        position: { x: node.x, y: node.y },
        sourcePosition: "right",
        targetPosition: "left",
        className: mode === "profile" ? "node" : "fullnode",
      }))
      .concat(forConcat);
    return elements;
  }, [mode, steps]);

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#efefef",
      }}
    >
      <ReactFlow
        onElementClick={(evt, node) => {
          if (node.type !== "smoothstep" && mode === "profile") {
            setStepDetails({ evt: evt.currentTarget, node });
          }
        }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        paneMoveable={mode === "fullscreen"}
        zoomOnPinch={mode === "fullscreen"}
        zoomOnScroll={mode === "fullscreen"}
        zoomOnDoubleClick={mode === "fullscreen"}
        nodeTypes={nodeTypes}
        elements={elements}
      />
      <Popover
        anchor={stepDetails?.evt || null}
        onClose={() => {
          setStepDetails(null);
        }}
        nodeData={stepDetails?.node || null}
      />
    </div>
  );
};

export default Flow;
