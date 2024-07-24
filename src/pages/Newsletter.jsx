import React from "react";
import HoriNav from "../components/HoriNav";
import "./Newsletter.css";
import page1 from '../assets/newsletter/juneNewsLetter (1)_page-0001.jpg';
import page2 from '../assets/newsletter/juneNewsLetter (1)_page-0002.jpg';
import page3 from '../assets/newsletter/juneNewsLetter (1)_page-0003.jpg';
import page4 from '../assets/newsletter/juneNewsLetter (1)_page-0004.jpg';
import page5 from '../assets/newsletter/juneNewsLetter (1)_page-0005.jpg';
import page6 from '../assets/newsletter/juneNewsLetter (1)_page-0006.jpg';
import Footer from "../components/Footer";

export default function Newsletter() {
  return (
    <div>
      <HoriNav />
      <div className="newspdf">
        <h1>Newsletters</h1>
        {/* <iframe src="https://drive.google.com/file/d/1Jl8LFXeMdn2myAvvAAmzgBiurdeBHIfi/preview"></iframe> */}
        <img src={page1} alt="page 1"/>
        <img src={page2} alt="page 2"/>
        <img src={page3} alt="page 3"/>
        <img src={page4} alt="page 4"/>
        <img src={page5} alt="page 5"/>
        <img src={page6} alt="page 6"/>
        <div className="foot">
          <Footer />
        </div>
      </div>
      
    </div>
  );
}
