import React from 'react';
import './Intro.css';
import astro from "../assets/events/Astro Symposium.jpg";
import celestial from "../assets/events/Celestial Dive.jpg";
import cosmic from "../assets/events/Cosmic Walk.jpg";
import skyforge from "../assets/events/SkyForge.jpg";
import yantra from "../assets/events/Yantra Event on JWST.jpg";
import { GiAstronautHelmet } from 'react-icons/gi';

export default function Events() {
  return (
    <div className='introComp'>
        <h1>Events</h1>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={astro} class="d-block w-100" alt="Astro Symposium" />
                    <div class="carousel-caption d-none d-md-block">
                        <h4>Astro Symposium</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={celestial} class="d-block w-100" alt="Celestial Dive" />
                    <div class="carousel-caption d-none d-md-block">
                        <h4>Celestial Dive</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={cosmic} class="d-block w-100" alt="Cosmic Walk" />
                    <div class="carousel-caption d-none d-md-block">
                        <h4>Cosmic Walk</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={skyforge} class="d-block w-100" alt="SkyForge" />
                    <div class="carousel-caption d-none d-md-block">
                        <h4>SkyForge</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={yantra} class="d-block w-100" alt="Yantra Event on JWST" />
                    <div class="carousel-caption d-none d-md-block">
                        <h4>Yantra Event on JWST</h4>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}