import React from "react";
import "./Intro.css";
import pic1 from '../assets/gallery/IMG-20230922-WA0043-1.jpg'
import pic2 from '../assets/gallery/IMG-20230925-WA0023.jpg'
import pic3 from '../assets/gallery/IMG-20230925-WA0025.jpg'
import pic4 from '../assets/gallery/IMG20230920132933.jpg'
import pic5 from '../assets/gallery/IMG20230922134743_01.jpg'

export default function Gallery() {
  return (
    <div className="introComp">
      <h1>Gallery</h1>
      <div id="carouselExampleIndicators" class="carousel slide mx-3 mb-4 border" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pic1} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={pic2} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={pic4} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={pic5} class="d-block w-100" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
