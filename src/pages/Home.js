import React from 'react';
import Contact from '../components/home/Contact'
import Instagram from '../components/home/Instagram'
import Service from '../components/home/Service'
import Welcome from '../components/home/Welcome'
import './Home.css'

function Home() {
  return(
    <><section className="header">
      <div className="row-layout">
        <Welcome />
        {/* Work and talk about where to put instagram later  */}
        {/* <div className="instagram">
          <Instagram /> */}
        {/* </div> */}
      </div>
    </section><div className="column-layout">
        <Service />
        <Contact />
      </div></>

  )
}

export default Home;
