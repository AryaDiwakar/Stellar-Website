import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css';
import logo from '../assests/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  return (
        <header>
            <div className='logo'>
                <img src={logo} alt="Logo" />
                <p>VIT - STELLAR</p>
            </div>
            <div className='navbar'>
                <ul>
                    <a href='#'>home</a>
                    <a href='#about_us'>about us</a>
                    <a href='#events'>events</a>
                    <a href='#newsletter'>newsletter</a>
                    <a href='#gallery'>gallery</a>
                </ul>
            </div>
        </header>
  )
};




//     <header>
//       <nav>
//         <div className="hatitle">
//           HomeAssist
//         </div>
//         <div className="hamenu">
//           <a href="/">
//             <GiHamburgerMenu/>
//           </a>
//         </div>
//       </nav>
//       <div className="logo">
//         <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
//       </div>
//     </header>
//   );
// };