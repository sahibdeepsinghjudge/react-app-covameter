import React from 'react'
import './ios.css';
function Navbar() {
    document.addEventListener('scroll',()=>document.querySelector('.navi').classList.add('scrolled'))
    return (
        <nav className="navi mb-4" id="navbar">
  <label className="logo">
 <b>COVAMeter</b></label>
</nav>

    )
}
export default Navbar
