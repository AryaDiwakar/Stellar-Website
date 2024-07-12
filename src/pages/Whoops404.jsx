import React from "react";
import HoriNav from "../components/HoriNav";
import { positionGeometry } from "three/examples/jsm/nodes/Nodes.js";

export default function Whoops404() {
  const myStyle = {
    position: "relative",
    top: "50vh",
    textAlign: "center",
    color: "#f8bc04"
  };
  return (
    <div>
      <HoriNav />
      <h1 style={myStyle}>Error 404: Not Found</h1>
    </div>
  );
}
