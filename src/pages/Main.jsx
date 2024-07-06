import React from "react";
import Navbar from "../components/Navbar";
import "./Main.css";
import sun from "../assests/Sun.png";
import planet_1 from "../assests/planet 1.mp4";
import planet_2 from "../assests/planet 2.mp4";
import planet_3 from "../assests/planet 3.mp4";
import planet_4 from "../assests/planet 4.mp4";
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
          <video autoPlay loop muted>
              <source src={planet_1} type="video/mp4"/>
          </video>
          <video autoPlay loop muted>
              <source src={planet_2} type="video/mp4"/>
          </video>
          <video autoPlay loop muted>
              <source src={planet_3} type="video/mp4"/>
          </video>
          <video autoPlay loop muted>
              <source src={planet_4} type="video/mp4"/>
          </video>
        </section>
        <section id="about_us"><div className="container"><Intro/></div></section>
        <section id="events"><div className="container"><Intro/></div></section>
        <section id="newsletter"><div className="container"><Intro/></div></section>
        <section id="gallery"><div className="container"><Intro/></div></section>
      </div>
    </div>
  );
}
