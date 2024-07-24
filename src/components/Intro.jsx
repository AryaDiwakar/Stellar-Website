import React, { useState } from 'react';
import './Intro.css';
import { SiTrueup } from 'react-icons/si';

export default function Intro() {
  const [displayUs, setDisplayUs] = useState(true);
  const eventUs = () => {
    setDisplayUs(true);
  }
  const eventVIT = () => {
    setDisplayUs(false);
  }
  return (
    <div className='introComp' id='introComp'>
        <h1 onClick={eventUs} className={displayUs ? "clicked" : "notClicked"}>About Us</h1> <h1>|</h1>
        <h1 onClick={eventVIT} className={displayUs ? "notClicked" : "clicked"}>About VIT</h1>
        <div className={displayUs ? "show us" : "hide us"}>
          <p>Astronomy Club - VIT Stellar, where passion meets the cosmos! Founded by astronomy enthusiasts at Vellore Institute of Technology, our club is dedicated to exploring the wonders of the universe and fostering a community of stargazers, scientists, and dreamers. </p>
          <p>Our motive is to ignite curiosity and inspire exploration of the cosmos. Through engaging workshops, star parties, and informative sessions, we aim to make astronomy accessible and enjoyable for everyone, from beginners to seasoned astronomers.</p>
        </div>
        <div className={displayUs ? "hide vit" : "show vit"}>
          <p>VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. 
            The campus has a cosmopolitan atmosphere with students from all corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students. The global standards set at VIT in the field of teaching and research spur us on in our relentless pursuit of excellence.</p>
        </div>
    </div>
  )
}
