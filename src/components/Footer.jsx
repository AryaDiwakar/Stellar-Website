import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footerRow" id="first">
        <div id="footlogo">VIT - Stellar</div>
        <div className="connectUs">
          <a
            href="https://www.instagram.com/vit_stellar?igsh=MXdiNGI3cDg5YzYxMA=="
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/vit-stellar/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/vitstellar?mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook />
          </a>
          </div>
      </div>
      <div className="footerRow">
        <p>Made By:</p>
      </div>
      <div className="footerRow">
        {/* <div></div> */}
        <div className="footerRow using">
          <p id="pradyun">Pradyun Mondal</p>
          <div className="links">
            <a href="https://github.com/pradyun1611" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pradyun-mondal-77b798289/" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="footerRow using">
          <p>Prathmesh Gahukar</p>
          <div className="links">
            <a href="https://github.com/Prathm374" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prathmeshg374/" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </footer>
  );
}
