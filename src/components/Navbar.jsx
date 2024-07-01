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
                    <NavLink to='/home'>home</NavLink>
                    <NavLink to='/about'>about us</NavLink>
                    <NavLink to='/events'>events</NavLink>
                    <NavLink to='/newsletter'>newsletter</NavLink>
                    <NavLink to='/gallery'>gallery</NavLink>
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