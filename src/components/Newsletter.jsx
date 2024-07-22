import React from 'react';
import './Intro.css';
import pic1 from '../assets/newsletter/juneNewsLetter (1)_page-0001.jpg'
import pic2 from '../assets/newsletter/juneNewsLetter (1)_page-0004.jpg'
import pic3 from '../assets/newsletter/juneNewsLetter (1)_page-0006.jpg'

export default function Newsletter() {
  return (
    <div className='introComp nl'>
        <h1>Newsletter</h1>
        <div id='pic2'>
          <img src={pic2} alt = "newsletter1"/>
          <p>May '24</p>
        </div>
        <div id='pic1'>
          <img src={pic1} alt = "newsletter2"/>
          <p>June '24</p>
        </div>
        <div id='pic3'>
          <img src={pic3} alt = "newsletter3"/>
          <p>July '24</p>
        </div>
    </div>
  )
}
