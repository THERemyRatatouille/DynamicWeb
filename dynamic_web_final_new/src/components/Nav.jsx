import React from "react";
import Logo from '../assets/images/1trainlogo.svg'
import { Text } from '@react-three/drei'

function Nav() {
    return ( 
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
               

               
                <h1 className="title-styled" style={{ marginTop: "10px", marginLeft:"-5%"}}>
                    The{''} 
                    <img src={Logo} alt="MTA"   width = "100"
                   height = "100" style={{marginBottom: '-35px', marginTop: "-10px"}} /> 
                   {''}Line
                </h1>
                <li>
                <a className="link-styled">About</a>
                </li>
                <li>
                <a className="link-styled">Map Mode</a>
                </li>
                <li>
                <a className="link-styled">Contact</a>
                </li>
            </ul>
        </div>
    </nav> );
}

export default Nav;