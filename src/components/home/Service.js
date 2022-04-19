import React from 'react';
import './Service.css'

function Service() {
  return (
    <div className='service-container'>
      <div className='title-text'>
        SERVICES
      </div>
      <div className='column-cards service-title'>
        <div className='card'>
          <img src='https://www.devilswerk.com/wp-content/uploads/brizy/15/assets/images/iW=600&iH=400&oX=32&oY=0&cW=536&cH=400/Equip-Step-Lip-conversion-2.jpg' className='service-img'></img>
          <h3>Wheel Resizing</h3>
          <ul className='service-list'>
            <li>Step Lip Conversion</li>
            <li>Up/Down Size Width</li>
          </ul>
          </div>
        <div className='card'><h3>Repair Work</h3>
        <ul className='service-list'>
            <li>Step Lip Conversion</li>
            <li>Up/Down Size Width</li>
          </ul>
          <img src='https://www.devilswerk.com/wp-content/uploads/brizy/15/assets/images/iW=600&iH=400&oX=32&oY=0&cW=536&cH=400/Equip-Step-Lip-conversion-2.jpg' className='service-img-2'></img>
        </div>
        <div className='card'><h3>Machine Work</h3></div>
        <div className='card'><h3>Refinishing</h3></div>
      </div>
    </div>
    )
}

export default Service;
