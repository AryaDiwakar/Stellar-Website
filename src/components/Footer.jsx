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
    <div id="footerContainer">
      <footer>
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
      </footer>
    </div>
  );
}
