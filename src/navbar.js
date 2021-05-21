import React from 'react'
import './navbar.css'
function Navbar() {
    document.addEventListener('scroll',()=>document.querySelector('.navi').classList.add('scrolled'))
    return (
        <nav className="navi mb-4" id="navbar">
  <label className="logo">
 Cova-Meter</label>
</nav>

    )
}
export default Navbar
