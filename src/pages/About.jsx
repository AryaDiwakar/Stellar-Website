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
            <img src={board} alt='board group picture' />
          </div>
          <div className='desc'>
            <p>Astronomy Club - VIT Stellar, where passion meets the cosmos! Founded by astronomy enthusiasts at Vellore Institute of Technology, our club is dedicated to exploring the wonders of the universe and fostering a community of stargazers, scientists, and dreamers. 
              Our motive is to ignite curiosity and inspire exploration of the cosmos. Through engaging workshops, star parties, and informative sessions, we aim to make astronomy accessible and enjoyable for everyone, from beginners to seasoned astronomers.</p>
          </div>
        </div>
        <h2>Our Board</h2>
        <div className='cards_cont'>
          <Card img = {aniket} name = {"Aniket Rai"} post = {"Chairperson"}/>
          <Card img = {vishwajith} name = {"Vishwajith Prabhakar"} post = {"Secretary"}/>
          <Card img = {devangi} name = {"Devangi Arora"} post = {"Vice Chairperson"}/>
          <Card img = {aayush} name = {"Aayush Nagpal"} post = {"Co-Secretary"}/>
          <Card img = {muskaan} name = {"Muskaan Patni"} post = {"Technical Head"}/>
          <Card img = {shreejata} name = {"Shreejata Gupta"} post = {"Events Head"}/>
          <Card img = {sanchita} name = {"Sanchita Jindal"} post = {"Management Head"}/>
          <Card img = {swayam} name = {"Swayam Galgalikar"} post = {"Finance Head"}/>
          <Card img = {supransha} name = {"⁠Supransha Thapa"} post = {"Design Head"}/>
          <Card img = {avanish} name = {"⁠Avanish Gharat"} post = {"Editorial Head"}/>
        </div>
        <h2>Our Faculty Coordinator</h2>
        <div className='coord'>
          <div className='coord_pic'>
            <img src={coordinator} />
            <p>Mrs. Selva Rani B</p>
          </div>
          <div className='coord_desc'>
            <p>Astronomy Club - VIT Stellar, where passion meets the cosmos! Founded by astronomy enthusiasts at Vellore Institute of Technology, our club is dedicated to exploring the wonders of the universe and fostering a community of stargazers, scientists, and dreamers. Our motive is to ignite curiosity and inspire exploration of the cosmos. Through engaging workshops, star parties, and informative sessions, we aim to make astronomy accessible and enjoyable for everyone, from beginners to seasoned astronomers.</p>
          </div>
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  )
}
