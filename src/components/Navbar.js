import React from 'react'
import Profile from './Profile'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
    <ul className="nav-links">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
    <ul className="nav-links">
      <li><NavLink to="/logout">Logout</NavLink></li>
    </ul>
  </div>
  
   
  )
}

export default Navbar
