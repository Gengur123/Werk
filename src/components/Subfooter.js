import React from 'react';
import './Subfooter.css'

function Subfooter() {
  return(
    <section className='column-subfooter'>
      <img src='/img/EquipWheel.jpg' alt='logo' className='contact-logo'></img>
      <div className='info-row'>
        <div className='column-1-3'>
          <h3>Contact</h3>

          <h4>Phone:</h4>
          <div className='info'>666-666-6666</div>

          <h4>Email:</h4>
          <div className='info'>sugandeze@laydeez.com</div>

          <h4>Address:</h4>
          <div className='info'>666 Hell Avenue</div>
        </div>
        <div className='column-2-3'>
          <h3>Support</h3>
        </div>
        <div className='column-3-3'>
          <h3>Socials</h3>
        </div>
      </div>
    </section>
  )
}

export default Subfooter;