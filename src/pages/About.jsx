import React from 'react';
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
import Card from '../components/Card';
import coordinator from '../assets/about us/coordinator.webp';
import Footer from '../components/Footer';

export default function About() {
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
        <h2>Our Board</h2>
        <div className='cards_cont'>
          <Card img = {aniket} name = {"Aniket Rai"} post = {"Chairperson"} linkedin = {"https://www.linkedin.com/in/aniket-rai-694b5b244/"} alt = "board_member"/>
          <Card img = {vishwajith} name = {"Vishwajith Prabhakar"} post = {"Secretary"} linkedin = {"https://www.linkedin.com/in/vishwajith-prabhakar-506b08229/"} alt = "board_member"/>
          <Card img = {devangi} name = {"Devangi Arora"} post = {"Vice Chairperson"} linkedin = {"https://www.linkedin.com/in/devangi-arora/"} alt = "board_member"/>
          <Card img = {aayush} name = {"Aayush Nagpal"} post = {"Co-Secretary"} linkedin = {"https://www.linkedin.com/in/aayush-nagpal-71022b28a/"} alt = "board_member"/>
          <Card img = {muskaan} name = {"Muskaan Patni"} post = {"Technical Head"} linkedin = {"https://www.linkedin.com/in/muskaan-patni-08483820a/ "} alt = "board_member"/>
          <Card img = {shreejata} name = {"Shreejata Gupta"} post = {"Events Head"} linkedin = {"https://www.linkedin.com/in/shreejata-gupta-385055275/"} alt = "board_member"/>
          <Card img = {sanchita} name = {"Sanchita Jindal"} post = {"Management Head"} linkedin = {"https://www.linkedin.com/in/sanchita-jindal-358790289/"} alt = "board_member"/>
          <Card img = {swayam} name = {"Swayam Galgalikar"} post = {"Finance Head"} linkedin = {"https://www.linkedin.com/in/swayam-galgalikar-ab908a269/"} alt = "board_member"/>
          <Card img = {supransha} name = {"⁠Supransha Thapa"} post = {"Design Head"} linkedin = {"https://www.linkedin.com/in/supransha-thapa-b4824332a"} alt = "board_member"/>
          <Card img = {avanish} name = {"⁠Avanish Gharat"} post = {"Editorial Head"} linkedin = {"https://www.linkedin.com/in/avanish-gharat/"} alt = "board_member"/>
        </div>
        <h2>Our Faculty Coordinator</h2>
        <div className='coord'>
          <div className='coord_pic'>
            <img src={coordinator} alt='Mrs. Selva Rani B'/>
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
  )
}
