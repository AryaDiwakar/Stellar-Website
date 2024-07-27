import React, { useState } from 'react';
import './Intro.css';

export default function Intro() {
  const [us, setUs] = useState(true);
  const setTrue = () => {
    setUs(true);
  }
  const setFalse = () => {
    setUs(false);
  }
  return (
    <div className='introComp'>
        <h1 onClick={setTrue} className={us ? "pointer clicked" : "pointer notClicked"}>About Us</h1><h1>|</h1><h1 onClick={setFalse} className={us ? "pointer notClicked" : "pointer clicked"}>About VIT</h1>
        <div className={us ? "visible us" : "hidden us"}>
          <p>Astronomy Club - VIT Stellar, where passion meets the cosmos! Founded by astronomy enthusiasts at Vellore Institute of Technology, our club is dedicated to exploring the wonders of the universe and fostering a community of stargazers, scientists, and dreamers. </p>
          <p>Our motive is to ignite curiosity and inspire exploration of the cosmos. Through engaging workshops, star parties, and informative sessions, we aim to make astronomy accessible and enjoyable for everyone, from beginners to seasoned astronomers.</p>
        </div>
        <div className={us ? "hidden vit" : "visible vit"}>
          <p>VIT, a premier Indian institution, has emerged as a leading center for higher education. Established in 1984, it has blossomed into a prestigious Deemed-to-be University, renowned for its academic excellence and global outlook.</p> 
          <p>The Department of Students Welfare fosters a vibrant campus life, supporting a multitude of clubs, chapters, and teams. With a strong emphasis on research, innovation, and holistic development, VIT empowers students to reach their full potential.</p>
        </div>
    </div>
  )
}
