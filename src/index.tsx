import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { ReactFlowProvider } from "react-flow-renderer";
import CampaignProfile from "./CampaignProfile";
import FullScreen from "./FullScreen";
import steps from "./campaign.json";
import Toolbar from "./components/Toolbar";
import "./styles.css";

const App: React.FC = () => {
  const [mode, setMode] = useState<string>("fullscreen");

  return (
    <div>
      {/* @ts-ignore */}
      <ReactFlowProvider>
        <div>
          <Toolbar currentMode={mode} changeMode={setMode} />
          {mode === "profile" ? <CampaignProfile steps={steps} /> : null}
          {mode === "fullscreen" ? <FullScreen steps={steps} /> : null}
        </div>
      </ReactFlowProvider>
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
