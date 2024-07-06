import React from "react";
import Navbar from "../components/Navbar";
import "./Main.css";
import sun from "../assests/Sun.png";
import earth from "../assests/four.jpg";
import neptune from "../assests/three.jpg";
import jupiter from "../assests/two.jpg";
import saturn from "../assests/one.jpg";
import Intro from "../components/Intro";

export default function Main() {
  return (
    <div>
      <div className="mainPage">
        <img src={sun} alt="Sun" className="sun" />
        <Navbar />
      </div>
      <div className="intro">
        <section className="planets">
          {/* <img src={earth} alt="earth" /> */}
          <video autoplay>
              <source src="src/assests/planet 1.mp4" type="video/mp4" />
              This browser does not display the video tag.
          </video>
          <img src={jupiter} alt="jupiter" />
          <img src={neptune} alt="neptune" />
          <img src={saturn} alt="saturn" />
        </section>
        <section id="about_us"><div className="container"><Intro/></div></section>
        <section id="events"><div className="container"><Intro/></div></section>
        <section id="newsletter"><div className="container"><Intro/></div></section>
        <section id="gallery"><div className="container"><Intro/></div></section>
      </div>
    </div>
  );
}
