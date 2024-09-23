import React from "react";
import HoriNav from "../components/HoriNav";
import "./Newsletter.css";
import page1 from "../assets/newsletter/juneNewsLetter (1)_page-0001.webp";
import page2 from "../assets/newsletter/juneNewsLetter (1)_page-0002.webp";
import page3 from "../assets/newsletter/juneNewsLetter (1)_page-0003.webp";
import page4 from "../assets/newsletter/juneNewsLetter (1)_page-0004.webp";
import page5 from "../assets/newsletter/juneNewsLetter (1)_page-0005.webp";
import page6 from "../assets/newsletter/juneNewsLetter (1)_page-0006.webp";
import Footer from "../components/Footer";

export default function Newsletter() {
    return (
        <div>
            <HoriNav />
            <div className="newspdf">
                {/* <iframe src="https://drive.google.com/file/d/1Jl8LFXeMdn2myAvvAAmzgBiurdeBHIfi/preview"></iframe>
         <img src={page1} alt="page 1"/>
         <img src={page2} alt="page 2"/>
        <img src={page3} alt="page 3"/>
         <img src={page4} alt="page 4"/>
         <img src={page5} alt="page 5"/>
         <img src={page6} alt="page 6"/>
          */}

                <h1>Newsletters</h1>
                <link rel="preload" href={page1} as="image" />

                {/* Display responsive and lazy-loaded images */}
                <img
                    src={page1}
                    srcSet={`${page1} 800w, ${page1.replace(
                        ".webp",
                        "-small.webp"
                    )} 400w`}
                    sizes="(max-width: 600px) 400px, 800px"
                    alt="page 1"
                />
                <img
                    src={page2}
                    srcSet={`${page2} 800w, ${page2.replace(
                        ".webp",
                        "-small.webp"
                    )} 400w`}
                    sizes="(max-width: 600px) 400px, 800px"
                    alt="page 2"
                    loading="lazy"
                />
                <img
                    src={page3}
                    srcSet={`${page3} 800w, ${page3.replace(
                        ".webp",
                        "-small.webp"
                    )} 400w`}
                    sizes="(max-width: 600px) 400px, 800px"
                    alt="page 3"
                    loading="lazy"
                />
                <img
                    src={page4}
                    srcSet={`${page4} 800w, ${page4.replace(
                        ".webp",
                        "-small.webp"
                    )} 400w`}
                    sizes="(max-width: 600px) 400px, 800px"
                    alt="page 4"
                    loading="lazy"
                />
                <img
                    src={page5}
                    srcSet={`${page5} 800w, ${page5.replace(
                        ".webp",
                        "-small.webp"
                    )} 400w`}
                    sizes="(max-width: 600px) 400px, 800px"
                    alt="page 5"
                    loading="lazy"
                />
                <img
                    src={page6}
                    srcSet={`${page6} 800w, ${page6.replace(
                        ".webp",
                        "-small.webp"
                    )} 400w`}
                    sizes="(max-width: 600px) 400px, 800px"
                    alt="page 6"
                    loading="lazy"
                />

                <div className="foot">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
