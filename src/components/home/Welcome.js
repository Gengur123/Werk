import React from 'react';
import './Welcome.css'
import { Link } from 'react-router-dom';

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
              <br/>
              <br/>
              <div className='title-texts'>CHECK OUT OUR</div>
              <br/>
              <button className="header-button">
                <Link to='/inventory'>Inventory</Link>
              </button>
            </div>
          </div>
        </div>
    )
}

export default Welcome;