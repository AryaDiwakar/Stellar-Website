import React from "react";
import "./Intro.css";
import { NavLink } from "react-router-dom";
import pic1 from "../assets/newsletter/juneNewsLetter (1)_page-0001.jpg";
import pic2 from "../assets/newsletter/juneNewsLetter (1)_page-0004.jpg";
import pic3 from "../assets/newsletter/juneNewsLetter (1)_page-0006.jpg";

export default function Newsletter() {
  return (
    <div className="nl">
      <h1>Newsletter</h1>
      <NavLink to={"/newsletter"} id="pic2">
        <img  src={pic2} alt="newsletter1" />
        <p>Jun '24</p>
      </NavLink>
      <NavLink to={"/newsletter"} id="pic1">
        <img  src={pic1} alt="newsletter2" />
        <p>Jul '24</p>
      </NavLink>
      <NavLink to={"/newsletter"} id="pic3">
        <img  src={pic3} alt="newsletter3" />
        <p>May '24</p>
      </NavLink>
    </div>
  );
}
