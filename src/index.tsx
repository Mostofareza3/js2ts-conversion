import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

import React from "react";
import CampaignProfile from "./CampaignProfile";
import FullScreen from "./FullScreen";
import steps from "./campaign.json";
import Providers from "./components/Providers";
import Toolbar from "./components/Toolbar";
import "./styles.css";

const App = () => {
  const [mode, setMode] = useState("fullscreen");

  return (
    <Providers>
      <Toolbar currentMode={mode} changeMode={setMode} />
      {mode === "profile" && <CampaignProfile steps={steps} />}
      {mode === "fullscreen" && <FullScreen steps={steps} />}
    </Providers>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
