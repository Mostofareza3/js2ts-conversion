import React from "react";
import { ReactFlowProvider } from "react-flow-renderer";
const FlowProvider: React.FC<{ children: React.ReactNode }> = ReactFlowProvider;

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <FlowProvider>{children}</FlowProvider>;
};

export default Providers;
