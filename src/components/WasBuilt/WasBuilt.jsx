import React from 'react'
import bobur from '../../img/Group 201.png'
import './WasBuilt.css'
const WasBuilt = () => {
  return (
    <div className='WasBuilt'>
      <div className='Wastext'>
        <h3>PRICING</h3>
        <h1>Let’s get some real work done here.</h1>
        <p>Prodict is your perfect solution for working. Get started now for free</p>
      </div>
      <div className='bigbox'>
      <div className='box'>
          <h4>Free</h4>
          <p>Brief price description</p>
          <img src={bobur} />
          <h3>Only 2Operators</h3>
          <h3>Notifications</h3>
          <h3>Landing Pages</h3>
          <button>Order Now</button>
      </div>
      <div className='box'>
          <h4>Standard</h4>
          <p>Brief price description</p>
          <img src={bobur} />
          <h3>Only 2Operators</h3>
          <h3>Notifications</h3>
          <h3>Landing Pages</h3>
          <button>Order Now</button>
      </div>
      <div className='box'>
          <h4>Premium</h4>
          <p>Brief price description</p>
          <img src={bobur} />
          <h3>Only 2Operators</h3>
          <h3>Notifications</h3>
          <h3>Landing Pages</h3>
          <button>Order Now</button>
      </div>
      </div>
    </div>
  )
}

export default WasBuilt
