import React from 'react';
import globe from '../assets/globe.png';

const Top = (props) => {
  console.log(props);
  return(
    <header className='header-rectangle'>
      <div className='header-group'>
        <img src={globe} width='24px'/>
        <span className='header-text'>my travel journal.</span>
      </div>
    </header>
  )
}

export default Top;