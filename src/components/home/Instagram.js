import React from 'react';
import './Instagram.css'
import InstagramIcon from '@mui/icons-material/Instagram';

function Instagram() {
  return (
    <>
      <div className='title-text'>
        OUR WORK
          <a href="https://www.instagram.com/devilswerk/" target="_blank" rel="noopener noreferrer"><InstagramIcon className='instagram' sx={{ fontSize: 41 }}/></a>
      </div>   
    </>
    )
}

export default Instagram;