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
          <img src='/img/EquipWheel.jpg' alt='wheel' className='service-img'></img>
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
          <img src='/img/EquipWheel.jpg' alt='wheel' className='service-img-2'/>
        </div>
        <div className='card'><h3>Machine Work</h3></div>
        <div className='card'><h3>Refinishing</h3></div>
      </div>
    </div>
    )
}

export default Service;
