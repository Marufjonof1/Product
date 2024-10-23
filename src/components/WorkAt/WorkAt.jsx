import React from 'react'
import './WorkAt.css'
import 'boxicons'
import workatimg from '../../img/workat.png'

const WorkAt = () => {
  return (
    <div className='Workat'>
        <div className="text">
        <h1>Work  at the speed <br /> of thought</h1>
        <p>Tools, tutorials, design and innovation experts, <br /> all in one place! The most intuitive way to <br /> imagine your next user experience.</p>
       <div className="btn">
          <button className='getstart'>Get started</button>
          <button className='watch'> <box-icon name='right-arrow' type='solid' color='#02897a' ></box-icon> Watch the Video</button>
       </div>
      </div>
      <div className="img">
        <img src={workatimg} alt="" />
      </div>
    </div>
  )
}

export default WorkAt
