import React from 'react'
import Logo from '../img/Star_Wars_Logo.png'
import Style from '../style/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={Style.navbar}>
      <img src={Logo} alt='Star Wars Logo' className={Style.logo}/>
      <ul>
        <li>Home</li>
        <li>Characters</li>
        <li>Planets</li>
      </ul>
    </nav>
  )
}

export default Navbar
