import React from 'react';
import './Welcome.css'
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div>
          <div>
            <div className="column-layout">
            <div className="title-text">DEVIL'S WERK</div>
              <div className="header-text">WE DON'T PLAY WITH WHEELS </div>
              <div className="header-text">WE MAKE THEM <span className="red">WERK </span> FOR YOU</div>
              <div className='title-texts check-out-our'>CHECK OUT OUR</div>
              <button className="header-button">
                <Link to='/inventory'>INVENTORY</Link>
              </button>
            </div>
          </div>
        </div>
    )
}

export default Welcome;