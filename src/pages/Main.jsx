import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Main.css";
import sun from "../assets/Sun.png";
import planet_1 from "../assets/planet 1.mp4";
import planet_2 from "../assets/planet 2.mp4";
import planet_3 from "../assets/planet 3.mp4";
import planet_4 from "../assets/planet 4.mp4";
import Intro from "../components/Intro";
import Events from "../components/Events";

export default function Main() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div>
      <div className="mainPage">
        <img src={sun} alt="Sun" className="sun" />
        <Navbar scroll = {scrollPosition}/>
      </div>
      <div className="intro">
        <section className="planets">
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
        <section id="about_us"><div className="cont"><Intro/></div></section>
        <section id="events"><div className="cont"><Events/></div></section>
        <section id="newsletter"><div className="cont"><Intro/></div></section>
        <section id="gallery"><div className="cont"><Intro/></div></section>
      </div>
    </div>
  );
}