import React from "react";
import HoriNav from "../components/HoriNav";
import "./Gallery.css";
import one from "../assets/gallery/one.jpg";
import two from "../assets/gallery/two.jpg";
import three from "../assets/gallery/three.jpg";
import four from "../assets/gallery/four.jpg";
import five from "../assets/gallery/five.jpg";
import six from "../assets/gallery/6.jpg";
import seven from "../assets/gallery/7.jpg";
import eight from "../assets/gallery/8.jpg";
import nine from "../assets/gallery/9.jpg";
import ten from "../assets/gallery/10.jpg";
import eleven from "../assets/gallery/11.jpg";
import twelve from "../assets/gallery/12.jpg";
import thirteen from "../assets/gallery/13.jpg";
import fourteen from "../assets/gallery/14.jpg";
import fifteen from "../assets/gallery/15.jpg";
import sixteen from "../assets/gallery/16.jpg";
import seventeen from "../assets/gallery/17.jpg";
import eightteen from "../assets/gallery/18.jpg";
import nineteen from "../assets/gallery/19.jpg";
import twenty from "../assets/gallery/20.jpg";
import twentyone from "../assets/gallery/21.jpg";
import twentytwo from "../assets/gallery/22.jpg";
import twentythree from "../assets/gallery/23.jpg";
import twentyfour from "../assets/gallery/24.jpg";
import twentyfive from "../assets/gallery/25.jpg";
import twentysix from "../assets/gallery/26.jpg";
import twentyseven from "../assets/gallery/27.jpg";


import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <div>
      <HoriNav />
      <div className="gallerypage">
        <h1>Gallery</h1>
        <div className="container galleryBox">
          <div className="galleryImg">
            <img src={one} alt="one" />
          </div>
          <div className="galleryImg">
            <img src={two} alt="two" />
          </div>
          <div className="galleryImg">
            <img src={three} alt="three" />
          </div>
          <div className="galleryImg">
            <img src={four} alt="four" />
          </div>
          <div className="galleryImg">
            <img src={five} alt="five" />
          </div>
          <div className="galleryImg">
            <img src={six} alt="six" />
          </div>
          <div className="galleryImg">
            <img src={seven} alt="seven" />
          </div>
          <div className="galleryImg">
            <img src={eight} alt="eight" />
          </div>
          <div className="galleryImg">
            <img src={nine} alt="nine" />
          </div>
          <div className="galleryImg">
            <img src={ten} alt="ten" />
          </div>
          <div className="galleryImg">
            <img src={eleven} alt="eleven" />
          </div>
          <div className="galleryImg">
            <img src={twelve} alt="twelve" />
          </div>
          <div className="galleryImg">
            <img src={thirteen} alt="thirteen" />
          </div>
          <div className="galleryImg">
            <img src={fourteen} alt="fourteen" />
          </div>
          <div className="galleryImg">
            <img src={fifteen} alt="fifteen" />
          </div>
          <div className="galleryImg">
            <img src={sixteen} alt="sixteen" />
          </div>
          <div className="galleryImg">
            <img src={seventeen} alt="seventeen" />
          </div>
          <div className="galleryImg">
            <img src={eightteen} alt="eightteen" />
          </div>
          <div className="galleryImg">
            <img src={nineteen} alt="nineteen" />
          </div>
          <div className="galleryImg">
            <img src={twenty} alt="twenty" />
          </div>
          <div className="galleryImg">
            <img src={twentyone} alt="twentyone" />
          </div>
          <div className="galleryImg">
            <img src={twentytwo} alt="twentytwo" />
          </div>
          <div className="galleryImg">
            <img src={twentythree} alt="twentythree" />
          </div>
          <div className="galleryImg">
            <img src={twentyfour} alt="twentyfour" />
          </div>
          <div className="galleryImg">
            <img src={twentyfive} alt="twentyfive" />
          </div>
          <div className="galleryImg">
            <img src={twentysix} alt="twentysix" />
          </div>
          <div className="galleryImg">
            <img src={twentyseven} alt="twentyseven" />
          </div>
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  );
}
