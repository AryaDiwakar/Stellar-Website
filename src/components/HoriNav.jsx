import React, { useState } from "react";
import "./HoriNav.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HoriNav() {
  // var home, about_us, events, newsletter, gallery;
  // const windowHeight = window.innerHeight;
  // const [displayNav, setDisplayNav] = useState(false);
  // window.addEventListener("scroll", () => {
  //   if (props.scroll >= windowHeight * 0.2) {
  //     setDisplayNav(true);
  //   } else {
  //     setDisplayNav(false);
  //   }
  // });
  return (
    <div className="horinav">
      <ul>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About Us</NavLink>
        <NavLink to={"/events"}>Events</NavLink>
        <NavLink to={"/newsletter"}>Newsletter</NavLink>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </ul>
      <div className="horilogo">
        <p>VIT - Stellar</p>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

//     <header>
//       <nav>
//         <div className="hatitle">
//           HomeAssist
//         </div>
//         <div className="hamenu">
//           <a href="/home">
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
