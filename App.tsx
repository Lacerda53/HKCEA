import React from "react";
import Routes from "./src/routes";
import { TimeProvider } from "./src/context/timeContext";

export default function App() {
  return (
    <TimeProvider>
      <Routes />
    </TimeProvider>
  );
}
