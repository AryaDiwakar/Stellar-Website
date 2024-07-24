import React from 'react';
import HoriNav from "../components/HoriNav";
import './About.css';
import aayush from '../assets/about us/Aayush nagpal co-secretary.jpg';
import aniket from '../assets/about us/Aniket rai chairperson.jpg';
import avanish from '../assets/about us/Avanish Gharat Editorial Head.jpg';
import devangi from '../assets/about us/Devangi Arora Vice- chairperson.jpg';
import muskaan from '../assets/about us/Muskaan Patni Technical Head.jpg';
import sanchita from '../assets/about us/Sanchita Jindal Management Head.jpg';
import shreejata from '../assets/about us/Shreejata gupta events head.jpg';
import supransha from '../assets/about us/Supransha thapa design head.jpg';
import swayam from '../assets/about us/Swayam Galgalikar Finance  Head.jpg';
import vishwajith from '../assets/about us/Vishwajith prabhakar secretary.jpg';
import board from '../assets/about us/Board grp picture.jpg';
import Card from '../components/Card';
import coordinator from '../assets/about us/Coordinator.png';
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
          <Card img = {aniket} name = {"Aniket Rai"} post = {"Chairperson"} alt = "board_member"/>
          <Card img = {vishwajith} name = {"Vishwajith Prabhakar"} post = {"Secretary"} alt = "board_member"/>
          <Card img = {devangi} name = {"Devangi Arora"} post = {"Vice Chairperson"} alt = "board_member"/>
          <Card img = {aayush} name = {"Aayush Nagpal"} post = {"Co-Secretary"} alt = "board_member"/>
          <Card img = {muskaan} name = {"Muskaan Patni"} post = {"Technical Head"} alt = "board_member"/>
          <Card img = {shreejata} name = {"Shreejata Gupta"} post = {"Events Head"} alt = "board_member"/>
          <Card img = {sanchita} name = {"Sanchita Jindal"} post = {"Management Head"} alt = "board_member"/>
          <Card img = {swayam} name = {"Swayam Galgalikar"} post = {"Finance Head"} alt = "board_member"/>
          <Card img = {supransha} name = {"⁠Supransha Thapa"} post = {"Design Head"} alt = "board_member"/>
          <Card img = {avanish} name = {"⁠Avanish Gharat"} post = {"Editorial Head"} alt = "board_member"/>
        </div>
        <h2>Our Faculty Coordinator</h2>
        <div className='coord'>
          <div className='coord_pic'>
            <img src={coordinator} alt='Mrs. Selva Rani B'/>
            <p>Mrs. Selva Rani B</p>
          </div>
          <div className='coord_desc'>
<<<<<<< HEAD
            <p>Dr. Selva Rani Ma'am, the driving force behind VIT-STELLAR. With a profound passion for astronomy and a dedication to nurturing young minds, she is committed to making the wonders of the universe accessible to all. Under her guidance, VIT-STELLAR has become a hub for astronomy enthusiasts, offering a platform to explore, learn, and share the magic of the cosmos.</p>
=======
            <p>Astronomy Club - VIT Stellar, where passion meets the cosmos! Founded by astronomy enthusiasts at Vellore Institute of Technology, our club is dedicated to exploring the wonders of the universe and fostering a community of stargazers, scientists, and dreamers. Our motive is to ignite curiosity and inspire exploration of the cosmos. Through engaging workshops, star parties, and informative sessions, we aim to make astronomy accessible and enjoyable for everyone, from beginners to seasoned astronomers.</p>
>>>>>>> parent of 1177c01 (1467of pinned msg)
          </div>
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  )
}
