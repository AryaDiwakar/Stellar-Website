import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Main.css";
import sun from "../assets/Sun.png";
import planet_1 from "../assets/planet 1.mp4";
import planet_2 from "../assets/planet 2.mp4";
import planet_4 from "../assets/planet 3.mp4";
import planet_3 from "../assets/planet 4.mp4";
import Intro from "../components/Intro";
import Events from "../components/Events";
import { NavLink } from "react-router-dom";

export default function Main() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="title">
        <p>Astronomy Club VIT - Stellar</p>
      </div>
      <div className="mainPage">
        <img src={sun} alt="Sun" className="sun" />
        <Navbar scroll={scrollPosition} />
      </div>
      <div className="intro">
        <section className="planets">
          <NavLink to={"/about"}>
            <div className="planet">
              <video src={planet_1} autoPlay loop muted preload="auto"></video>
              <p>About Us</p>
            </div>
          </NavLink>
          <NavLink to={"/events"}>
            <div className="planet">
              <video src={planet_2} autoPlay loop muted preload="auto"></video>
              <p>Events</p>
            </div>
          </NavLink>
          <NavLink to={"/newsletter"}>
            <div className="planet">
              <video src={planet_3} autoPlay loop muted preload="auto"></video>
              <p>Newsletter</p>
            </div>
          </NavLink>
          <NavLink to={"/gallery"}>
            <div className="planet">
              <video src={planet_4} autoPlay loop muted preload="auto"></video>
              <p>Gallery</p>
            </div>
          </NavLink>
        </section>
        <section id="about_us">
          <div className="cont">
            <Intro />
          </div>
        </section>
        <section id="events">
          <div className="cont">
            <Events />
          </div>
        </section>
        <section id="newsletter">
          <div className="cont">
            <Intro />
          </div>
        </section>
        <section id="gallery">
          <div className="cont">
            <Intro />
          </div>
        </section>
      </div>
    </div>
  );
}
