import React from "react";
import HoriNav from "../components/HoriNav";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div>
      <HoriNav />
      <div className="newspdf">
        <h1>Newsletter</h1>
        <iframe src="https://drive.google.com/file/d/1Jl8LFXeMdn2myAvvAAmzgBiurdeBHIfi/preview"></iframe>
      </div>
    </div>
  );
}
