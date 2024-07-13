import React from "react";
import HoriNav from "../components/HoriNav";
import "./Gallery.css";
import one from "../assets/gallery/one.jpg";
import two from "../assets/gallery/two.jpg";
import three from "../assets/gallery/three.jpg";
import four from "../assets/gallery/four.jpg";
import five from "../assets/gallery/five.jpg";
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
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  );
}
