import React from "react";

const Toolbar: React.FC<{ currentMode: string; changeMode: (mode: string) => void }> = ({ currentMode, changeMode }) => {
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
