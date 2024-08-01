import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div id="footlogo">VIT - Stellar</div>
      {/* <div>Developers Contact</div> */}
      <div className="footerRow">
        <div className="dev">Designed & Developed by:</div>
        <div className="dev">
          <p className="deskP">Prathmesh Gahukar</p>
          <p className="tab">Prathmesh</p>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/prathmeshg374/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Prathm374" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="dev">
          <p className="deskP">Pradyun Mondal</p>
          <p className="tab">Pradyun</p>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/pradyun-mondal-77b798289/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/pradyun1611" target="_blank">
              <FaGithub />
            </a>
          </div>
          </div>
        <div className="dev">
          <p className="deskP">Muskaan Patni</p>
          <p className="tab">Muskaan</p>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/muskaan-patni-08483820a/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/muskaanpatni" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="stellarCon">Follow us on:</p>
        <div className="connectUs">
          <a
            href="https://www.instagram.com/vit_stellar?igsh=MXdiNGI3cDg5YzYxMA=="
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/vit-stellar/"
            target="_blank"
          >
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
    </footer>
  );
}
