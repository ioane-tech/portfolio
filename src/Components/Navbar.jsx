import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar_div'>
       <img className="navbar_favicon" src="mainIcon.png" alt="My favicon" />
            
       <NavLink className='inline'to='/'>Home</NavLink>
       <NavLink className='inline' to='/aboutMe'>About me</NavLink>
       <NavLink className='inline' to="/projects">Projects</NavLink>   
    </div>
  )
}

export default Navbar