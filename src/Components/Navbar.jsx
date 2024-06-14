import React from 'react'


function Navbar() {
  return (
    <div className='navbar_div'>
       <img className="navbar_favicon" src="mainIcon.png" alt="My favicon" />
            
       <a className='inline'href='#home'>Home</a>
       <a className='inline' href='#aboutMe'>About me</a>
       <a className='inline' href="#projects">Projects</a>   
    </div>
  )
}

export default Navbar