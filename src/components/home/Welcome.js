import React from 'react';
import './Welcome.css'
// <img src="/image.jpg" alt="image" />
function Welcome() {
    return (
        <div>
          <div>
            <h1 className="title-text">DEVIL'S WERK</h1>
            <div className="column-layout">
              <span className="header-text">Check Out Our</span>
              <button className="header-button"><a href="#">Inventory</a></button>
            </div>
          </div>
        </div>
    )
}

export default Welcome;