import React from "react";
import "./Intro.css";
import './Events.css'
import astro from "../assets/events/one.webp";
import celestial from "../assets/events/two.webp";
import cosmic from "../assets/events/three.webp";
import skyforge from "../assets/events/four.webp";
import yantra from "../assets/events/five.webp";

export default function Events() {
  return (
    <div className="introComp">
      <h1>Events</h1>
      <div
        id="carouselExampleCaptions"
        className="carousel slide mx-3 mb-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={astro} className="d-block w-100" alt="Astro Symposium"/>
            <div className="carousel-caption d-md-block">
              <h4>Astro Symposium</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={celestial}
              className="d-block w-100"
              alt="Celestial Dive"
            />
            <div className="carousel-caption d-md-block">
              <h4>Celestial Dive</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cosmic} className="d-block w-100" alt="Cosmic Walk"/>
            <div className="carousel-caption d-md-block">
              <h4>Cosmic Walk</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={skyforge} className="d-block w-100" alt="SkyForge"/>
            <div className="carousel-caption d-md-block">
              <h4>SkyForge</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={yantra}
              className="d-block w-100"
              alt="Yantra Event on JWST"
            />
            <div className="carousel-caption d-md-block">
              <h4>Yantra Event on JWST</h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
