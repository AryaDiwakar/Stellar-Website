import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assests/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(props) {
  var home, about_us, events, newsletter, gallery;
  const windowHeight = window.innerHeight;
  if (props.scroll >= windowHeight * 0.5 && props.scroll < windowHeight * 1.5) {
    about_us = "active";
  } else if (
    props.scroll >= windowHeight * 1.5 &&
    props.scroll < windowHeight * 2.5
  ) {
    events = "active";
  } else if (
    props.scroll >= windowHeight * 2.5 &&
    props.scroll < windowHeight * 3.5
  ) {
    newsletter = "active";
  } else if (props.scroll >= windowHeight * 3.5) {
    gallery = "active";
  } else {
    home = "active";
  }
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p>VIT - STELLAR</p>
      </div>
      <div className="navbar">
        <ul>
          <a href="#" className={home}>
            home
          </a>
          <a href="#about_us" className={about_us}>
            about us
          </a>
          <a href="#events" className={events}>
            events
          </a>
          <a href="#newsletter" className={newsletter}>
            newsletter
          </a>
          <a href="#gallery" className={gallery}>
            gallery
          </a>
        </ul>
      </div>
    </header>
  );
}

//     <header>
//       <nav>
//         <div className="hatitle">
//           HomeAssist
//         </div>
//         <div className="hamenu">
//           <a href="/">
//             <GiHamburgerMenu/>
//           </a>
//         </div>
//       </nav>
//       <div className="logo">
//         <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
//       </div>
//     </header>
//   );
// };
