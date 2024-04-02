import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { ReactFlowProvider as RFP } from "react-flow-renderer";
import CampaignProfile from "./CampaignProfile";
import FullScreen from "./FullScreen";
import steps from "./campaign.json";
import Toolbar from "./components/Toolbar";
import "./styles.css";
const ReactFlowProvider = RFP as any;

const App = () => {
  const [mode, setMode] = useState<string>("fullscreen");

  return (
    <ReactFlowProvider>
      <Toolbar currentMode={mode} changeMode={setMode} />
      {mode === "profile" && <CampaignProfile steps={steps as any} />}
      {mode === "fullscreen" && <FullScreen steps={steps as any} />}
    </ReactFlowProvider>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
