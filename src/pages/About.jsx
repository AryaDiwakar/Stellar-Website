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
import supra from '../assets/about us/Supransha thapa design head.jpg';
import swayam from '../assets/about us/Swayam Galgalikar Finance  Head.jpg';
import vishwajit from '../assets/about us/Vishwajith prabhakar secretary.jpg';
import board from '../assets/about us/Board grp picture.jpg';

export default function About() {
  return (
    <div>
      <HoriNav />
      <div className='content'>
        <h1>About Us</h1>
        <div className='group'>
          <div className='img'>
            <img src='' />
          </div>
        </div>
      </div>
    </div>
  )
}
