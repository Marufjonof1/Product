import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import darkmod from '../../img/dark.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changetheme = () => {
    const rootElement = document.documentElement;
    if(isDarkMode){
      rootElement.classList.remove('dark')
    }
    else{
      rootElement.classList.add('dark')
    }
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div className='Navbar'>
      <div className="Container">
        <div className="Navbar_left">
          <img src={logo} alt="" />
          <h1>Product</h1>
        </div>
        <div className="Navbar_right">
          <Link to={'/'}>Product</Link>
          <Link to={'/customers'}>Customers</Link>
          <Link to={'/pricing'}>Pricing</Link>
          <Link to={'/resources'}>Resources</Link>
          <div className="btn">
            <button className='sign in'>Sign In</button>
            <button className='sign up'>Sign Up</button>
            <button onClick={changetheme} className="darkmode"><img src={darkmod} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
