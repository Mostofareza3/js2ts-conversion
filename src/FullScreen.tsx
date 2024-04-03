import React from "react";
import Flow from "./components/Flow";
import { ICampaign } from "./types/Campaign";

const FullScreen: React.FC<{ steps: ICampaign[] }> = ({ steps }) => {
  console.log(steps);
  return (
    <div style={{ height: "100%", backgroundColor: "#efefef" }}>
      <Flow mode="fullscreen" steps={steps} />
    </div>
  );
};

export default FullScreen;
