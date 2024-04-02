import React from "react";

const Toolbar = ({ currentMode, changeMode }: { currentMode: string; changeMode: (mode: string) => void }) => {
  return (
    <div className="toolbar">
      {currentMode === "profile" && (
        <div className="button" onClick={() => changeMode("fullscreen")}>
          Export
        </div>
      )}
      {currentMode === "fullscreen" && (
        <div className="button" onClick={() => changeMode("fullscreen")}>
          Close
        </div>
      )}
    </div>
  );
};

export default Toolbar;
