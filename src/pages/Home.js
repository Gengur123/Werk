import React from 'react';
import Contact from '../components/home/Contact'
import Instagram from '../components/home/Instagram'
import Service from '../components/home/Service'
import Welcome from '../components/home/Welcome'
import './Home.css'

function Home() {
  return(
    <> 
      <div className="row-layout">
        <h1>thing</h1>
        <Welcome />
          <div className="instagram">
          <Instagram />
        </div>
      </div>
      <div className="column-layout">
        <Service />
        <Contact /> 
      </div>
    </>

  )
}

export default Home;
