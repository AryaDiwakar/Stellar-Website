import React from "react";
import Navbar from "../components/Navbar";
import "./Main.css";
import sun from "../assests/Sun.png";
import earth from "../assests/four.jpg";
import neptune from "../assests/three.jpg";
import jupiter from "../assests/two.jpg";
import saturn from "../assests/one.jpg";


export default function Main() {
  return (
    <div className="mainPage">
      <img src={sun} alt="Sun" className="sun" />
      <section className="planets">
        <img src={earth} alt="earth" />
        {/* <img src={jupiter} alt="jupiter" /> */}
        <img src={neptune} alt="neptune" />
        <img src={saturn} alt="saturn" />
      </section>
      <Navbar />
    </div>
  );
}
