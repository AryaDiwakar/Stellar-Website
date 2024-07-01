import React from 'react';
import Navbar from '../components/Navbar';
import './Main.css';
import sun from '../assests/Sun.png'
import planet from '../assests/planet1.exe'
// import bgImg from '../assests/starryNight.svg'

export default function Main() {
  return (
    <div className='mainPage'>
      <img src={sun} alt="Sun" />
      <Navbar />
    </div>
  )
}
