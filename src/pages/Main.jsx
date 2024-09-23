import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Main.css";
import sun from "../assets/Sun.webp";
import planet_1 from "../assets/planet 1.mp4";
import planet_2 from "../assets/planet 2.mp4";
import planet_4 from "../assets/planet 3.mp4";
import planet_3 from "../assets/planet 4.mp4";
import testImg from "../assets/events/one.webp"
import Intro from "../components/Intro";
import Events from "../components/Events.jsx";
import Newsletter from "../components/Newsletter";
import { NavLink } from "react-router-dom";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import hehe from "../assets/2-removebg-preview.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faCircleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideTitle, setHideTitle] = useState(false);

  window.addEventListener("scroll", () => {
    if (scrollPosition >= window.innerHeight * 0.1) {
      setHideTitle(true);
    } else {
      setHideTitle(false);
    }
  });

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

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about_us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [hideUpc, setHideUpc] = useState(false);
  const hideupc = () => {
    setHideUpc(!hideUpc);
  };
  return (
    <>
      <div>
        <div className={hideTitle ? "title hideTitle" : "title"}>
          <p>Astronomy Club VIT - Stellar</p>
        </div>
        {/* <div className={hideUpc ? "heheBoi hideTitle" : "heheBoi"}>
          <button onClick={hideupc}>
            <img src={hehe} alt="upcEventsImg" />
          </button>
        </div>
        <div className={hideUpc ? "upcEvents" : "upcEvents hideTitle"}>
        <button onClick={hideupc} className="cross"><FontAwesomeIcon icon={faXmark} size="2x"/></button>
         <h3> Upocoming Events!!!</h3>
          
          <div className="upcEventsCont">
          <div><img src={testImg} alt="oneImg" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore error repudiandae dolore neque autem amet ullam vel deserunt laboriosam aliquam, libero, molestias aliquid quasi nobis illo exercitationem</p></div>
          <div><img src={testImg} alt="twoImg" /><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore error repudiandae dolore neque autem amet ullam vel deserunt laboriosam aliquam, libero, molestias aliquid quasi nobis illo exercitationem</p></div>
          <div><img  src={testImg} alt="threeImg" /><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore error repudiandae dolore neque autem amet ullam vel deserunt laboriosam aliquam, libero, molestias aliquid quasi nobis illo exercitationem</p></div>
          </div>
        </div> */}
        <button
          className={hideTitle ? "bArrow hideTitle" : "bArrow"}
          onClick={scrollToAboutUs}
        >
          {/* <img src={blinkingArrow} /> */}
          <FontAwesomeIcon icon={faAnglesDown} size="3x" bounce />
        </button>
        <div className="mainPage">
          <img src={sun} alt="Sun" className="sun" loading="eager"/>
          <Navbar scroll={scrollPosition} />
        </div>
        <div className="intro">
          <section className="planets">
            <NavLink to={"/about"}>
              <div className="planet">
                <video
                  src={planet_1}
                  autoPlay
                  loop
                  muted
                  preload="auto"
                ></video>
                <p>About Us</p>
              </div>
            </NavLink>
            <NavLink to={"/events"}>
              <div className="planet">
                <video
                  src={planet_2}
                  autoPlay
                  loop
                  muted
                  preload="auto"
                ></video>
                <p>Events</p>
              </div>
            </NavLink>
            <NavLink to={"/newsletter"}>
              <div className="planet">
                <video
                  src={planet_3}
                  autoPlay
                  loop
                  muted
                  preload="auto"
                ></video>
                <p>Newsletters</p>
              </div>
            </NavLink>
            <NavLink to={"/gallery"}>
              <div className="planet">
                <video
                  src={planet_4}
                  autoPlay
                  loop
                  muted
                  preload="auto"
                ></video>
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
              <Newsletter />
            </div>
          </section>
          <section id="gallery">
            <div className="cont">
              <Gallery />
            </div>
          </section>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
