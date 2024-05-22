import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className=''>
      <nav className='navbar-top'>
        <div className="img">
            <img src="../wise-logo-2.jpeg" className='logo' alt="" />
        </div>
        <div className="icons">
            <img className="notif-img btn-2" src="../bell.png" alt="" />
            <div className="button btn-14">
                <p>Account</p>
                <img className="person-img btn-2" src="../person.png" alt="" />
            </div>
            <div className="button btn-14">
                <p>Menu</p>
                <img className="person-img btn-2" src="../menu.png" alt="" />
            </div>
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar
