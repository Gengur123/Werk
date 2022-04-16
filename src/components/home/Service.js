import React from 'react';
import './Service.css'

function Service() {
  return (
    <>
      <div className='title-text'>
        SERVICES
      </div>
      <div className='service-row'>
        <div className='service-column'>
          <div  className='service-card'>
            <div className='service-title'>Wheel Resizing</div>
          </div>
        </div>
        <div className='service-column'>
          <div  className='service-card'> 
            <div className='service-title'>Repair Work</div>
          </div>
        </div>
        <div className='service-column'>
          <div className='service-card'> 
            <div className='service-title'>Machine Work</div>
          </div>
        </div>
        <div className='service-column'>
          <div className='service-card'>
            <div className='service-title'>Refinishing</div>
          </div>
        </div>
      </div>   
    </>
    )
}

export default Service;