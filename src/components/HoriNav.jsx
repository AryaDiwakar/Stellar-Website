import React, { useState } from "react";
import "./HoriNav.css";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from 'react-bootstrap/Dropdown';

export default function HoriNav() {
  return (
    <div className="horinav">
      <ul>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About Us</NavLink>
        <NavLink to={"/events"}>Events</NavLink>
        <NavLink to={"/newsletter"}>Newsletters</NavLink>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </ul>
      <div className="horilogo">
        <p>VIT - Stellar</p>
        <img src={logo} alt="Logo" />
      </div>
      <div className="hamenu">
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown">
          <GiHamburgerMenu/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/home">Home</Dropdown.Item>
            <Dropdown.Item href="/about">About Us</Dropdown.Item>
            <Dropdown.Item href="/events">Events</Dropdown.Item>
            <Dropdown.Item href="/newsletter">Newsletters</Dropdown.Item>
            <Dropdown.Item href="/gallery">Gallery</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
