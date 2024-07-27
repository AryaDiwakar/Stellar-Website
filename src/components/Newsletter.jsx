import React from 'react';
import './Intro.css';
import pic1 from '../assets/newsletter/juneNewsLetter (1)_page-0001.jpg'
import pic2 from '../assets/newsletter/juneNewsLetter (1)_page-0004.jpg'
import pic3 from '../assets/newsletter/juneNewsLetter (1)_page-0006.jpg'

export default function Newsletter() {
  return (
    <div className='nl'>
        <h1>Newsletter</h1>
        <img id='pic2' src={pic2} alt = "newsletter1"/>
        <img id='pic1' src={pic1} alt = "newsletter2"/>
        <img id='pic3' src={pic3} alt = "newsletter3"/>
    </div>
  )
}
