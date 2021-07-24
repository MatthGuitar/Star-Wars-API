import React from 'react'
import Logo from '../img/Star_Wars_Logo.png'
import Style from '../style/Navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={Style.navbar}>
      <Link to='/'>
      <img src={Logo} alt='Star Wars Logo' className={Style.logo}/>
      </Link>
      <ul>
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to='/characters'>
        <li>Characters</li>
        </Link>
        <Link to='/planets'>
        <li>Planets</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
