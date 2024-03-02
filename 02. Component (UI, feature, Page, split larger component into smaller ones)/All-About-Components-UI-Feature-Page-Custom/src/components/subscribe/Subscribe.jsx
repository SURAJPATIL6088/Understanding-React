import React from 'react'
import './style.css';

const subscribe = () => {
  return (
    <div className='subscribe'>
      <div className='sub-subscribe'>
        <p className='main-title'>Subscribe</p>
        <p className='sub-title'>Sign up with your email address to receive news and updates.</p>

        <div className='submit-detail'>
          <input className='submit-detail1' placeholder='First Name' type='text' />
          <input className='submit-detail1' placeholder='Last Name' type='text' />
          <input className='submit-detail1' placeholder='Email' type='email' />

          
        </div>

        <button className='btn-subscribe'>Subscribe</button>
      </div>
    </div>
  )
}

export default subscribe;