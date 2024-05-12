import React from 'react'
import logo from './images/contactUsLogo.png'


const Navigation = () => {
    return (
        <nav >
            <div className=" container">
                <img className='logo' src={logo} alt="" />
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                
            </ul>
        </nav>
    )
}

export default Navigation
