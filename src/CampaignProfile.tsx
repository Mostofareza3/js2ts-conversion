import React from "react";
import Flow from "./components/Flow";
import { ICampaign } from "./types/Campaign";

const CampaignProfile: React.FC<{ steps: ICampaign[] }> = ({ steps }) => {
  return (
    <div style={{ height: "100%", backgroundColor: "#efefef" }}>
      <Flow mode="profile" steps={steps} />
    </div>
  );
};

export default CampaignProfile;
