import React, { useState } from 'react';
import HoriNav from "../components/HoriNav";
import './About.css';
import aayush from '../assets/about us/Aayush nagpal co-secretary.webp';
import aniket from '../assets/about us/Aniket rai chairperson.webp';
import avanish from '../assets/about us/Avanish Gharat Editorial Head.webp';
import devangi from '../assets/about us/Devangi Arora Vice- chairperson.webp';
import muskaan from '../assets/about us/Muskaan Patni Technical Head.webp';
import sanchita from '../assets/about us/Sanchita Jindal Management Head.webp';
import shreejata from '../assets/about us/Shreejata gupta events head.webp';
import supransha from '../assets/about us/Supransha thapa design head.webp';
import swayam from '../assets/about us/Swayam Galgalikar Finance  Head.webp';
import vishwajith from '../assets/about us/Vishwajith prabhakar secretary.webp';
import board from '../assets/about us/Board grp picture.webp';
import coordinator from '../assets/about us/coordinator.webp';
import Card from '../components/Card';
import Footer from '../components/Footer';
import subhra from '../assets/about us/Subhra.jpg';
import sarvesh from '../assets/about us/Sarvesh.jpg';
import arya from '../assets/about us/Arya_1.jpg';
import Anushka from '../assets/about us/Anushka_1.jpg';
import Aaditya from '../assets/about us/Aaditya.jpg';
import Abishek from '../assets/about us/Abishek.jpg';
import Rishit from '../assets/about us/Rishit.jpg';
import Anirudh from '../assets/about us/Sarvesh.jpg';
import parv from '../assets/about us/Parv.jpg';
import Shivankar from '../assets/about us/Shivankar.jpg';

export default function About() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const boardData = {
    "2024": [
      { img: aniket, name: "Aniket Rai", post: "Chairperson", linkedin: "https://www.linkedin.com/in/aniket-rai-694b5b244/" },
      { img: vishwajith, name: "Vishwajith Prabhakar", post: "Secretary", linkedin: "https://www.linkedin.com/in/vishwajith-prabhakar-506b08229/" },
      { img: devangi, name: "Devangi Arora", post: "Vice Chairperson", linkedin: "https://www.linkedin.com/in/devangi-arora/" },
      { img: aayush, name: "Aayush Nagpal", post: "Co-Secretary", linkedin: "https://www.linkedin.com/in/aayush-nagpal-71022b28a/" },
      { img: muskaan, name: "Muskaan Patni", post: "Technical Head", linkedin: "https://www.linkedin.com/in/muskaan-patni-08483820a/" },
      { img: shreejata, name: "Shreejata Gupta", post: "Events Head", linkedin: "https://www.linkedin.com/in/shreejata-gupta-385055275/" },
      { img: sanchita, name: "Sanchita Jindal", post: "Management Head", linkedin: "https://www.linkedin.com/in/sanchita-jindal-358790289/" },
      { img: swayam, name: "Swayam Galgalikar", post: "Finance Head", linkedin: "https://www.linkedin.com/in/swayam-galgalikar-ab908a269/" },
      { img: supransha, name: "⁠Supransha Thapa", post: "Design Head", linkedin: "https://www.linkedin.com/in/supransha-thapa-b4824332a" },
      { img: avanish, name: "⁠Avanish Gharat", post: "Editorial Head", linkedin: "https://www.linkedin.com/in/avanish-gharat/" },
    ],
    "2025": [
      { img: subhra, name: "Subhra Dey", post: "Chairperson", linkedin: "https://www.linkedin.com/in/subhra-dey-a03565252/" },
      { img: sarvesh, name: "Sarvesh B", post: "Secretary", linkedin: "https://www.linkedin.com/in/sarvesh-baskaran-301480250/" },
      { img: arya, name: "Arya D", post: "Vice Chairperson", linkedin: "https://www.linkedin.com/in/arya-diwakar-6199b322b/" },
      { img: Anushka, name: "Anushka Arora", post: "Co-Secretary", linkedin: "https://www.linkedin.com/in/anushka-arora-779b8828a/" },
      { img: Abishek, name: "Abishek Ranganathan", post: "Technical Head", linkedin: "https://www.linkedin.com/in/abishek-ranganathan-4878a2290/" },
      { img: Aaditya, name: "Aaditya Sharma", post: "Events Head", linkedin: "https://www.linkedin.com/in/aaditya-sharma-9a47a128a/" },
      { img: Shivankar, name: "Shivankar Sinha", post: "Publicity Head", linkedin: "https://www.linkedin.com/in/shivankar-sinha-03a03728b/" },
      { img: Rishit, name: "Rishit Gupta", post: "Finance Head", linkedin: "https://www.linkedin.com/in/rishit-gupta-23b06528b/" },
      { img: parv, name: "Parv Pachouri", post: "Design Head", linkedin: "https://www.linkedin.com/in/parv-pachouri-093a5b293/" },
      { img: Anirudh, name: "Anirudh J", post: "Editorial Head", linkedin: "https://www.linkedin.com/in/anirudh-janakiram-009b68299/" },
    ],
  };

  return (
    <div>
      <HoriNav />
      <div className='content'>
        <h1>About Us</h1>
        <div className='group'>
          <div className='img'>
            <img src={board} alt='board_group_picture' />
          </div>
          <div className='desc'>
            <p>Astronomy Club - VIT Stellar, where passion meets the cosmos! Founded by astronomy enthusiasts at Vellore Institute of Technology, our club is dedicated to exploring the wonders of the universe and fostering a community of stargazers, scientists, and dreamers. 
              Our motive is to ignite curiosity and inspire exploration of the cosmos. Through engaging workshops, star parties, and informative sessions, we aim to make astronomy accessible and enjoyable for everyone, from beginners to seasoned astronomers.</p>
          </div>
        </div>

        <h2>Board</h2>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {Object.keys(boardData).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{
                padding: '8px 16px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedYear === year ? '#1e40af' : '#e5e7eb',
                color: selectedYear === year ? '#ffffff' : '#000000',
                fontWeight: 'bold'
              }}
            >
              {year}
            </button>
          ))}
        </div>

        <div className='cards_cont'>
          {boardData[selectedYear].map((member, index) => (
            <Card
              key={index}
              img={member.img}
              name={member.name}
              post={member.post}
              linkedin={member.linkedin}
              alt="board_member"
            />
          ))}
        </div>

        <h2>Our Faculty Coordinator</h2>
        <div className='coord'>
          <div className='coord_pic'>
            <img src={coordinator} alt='Mrs. Selva Rani B' />
            <p>Dr. Selva Rani B</p>
          </div>
          <div className='coord_desc'>
            <p>Dr. Selva Rani Ma'am, the driving force behind VIT-STELLAR. With a profound passion for astronomy and a dedication to nurturing young minds, she is committed to making the wonders of the universe accessible to all. Under her guidance, VIT-STELLAR has become a hub for astronomy enthusiasts, offering a platform to explore, learn, and share the magic of the cosmos.</p>
          </div>
        </div>

        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  );
}
