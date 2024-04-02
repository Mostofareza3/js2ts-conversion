import React from "react";
import Flow from "./components/Flow";
import { ICampaign } from "./types/campaign.type";

const FullScreen = ({ steps }: { steps: ICampaign[] }) => {
  return (
    <div style={{ height: "100%", backgroundColor: "#efefef" }}>
      <Flow mode="fullscreen" steps={steps} />
    </div>
  );
};

export default FullScreen;
