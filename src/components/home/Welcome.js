import React from 'react';
import './Welcome.css'
import Button from '@mui/material/Button';

function Welcome() {
    return (
        <div>
          <div>
          <br/>
          <br/>
            <div className="title-text">DEVIL'S WERK</div>
            <br/>
            <br/>
            <div className="column-layout">
              <span className="header-text">WE DON'T PLAY WITH WHEELS<br/> WE MAKE THEM <span className="red">WERK </span> FOR YOU</span>
              <div className='title-texts'>CHECK OUT OUR</div>
              <button className="header-button"><a href="#">Inventory</a></button>
            </div>
          </div>
        </div>
    )
}

export default Welcome;