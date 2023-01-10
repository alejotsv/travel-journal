import React from 'react';

const Cards = (propis) => {  
  const props = propis[0];  
  return(
    <div className='card'>
      <img src={`../../public/${props.img}`} alt='this place' height='225' width='325'/>
      <h3>{props.country}</h3>
      <a href={props.map_link} target='blank' >View on Google Maps</a>
      <h2>{props.place}</h2>
      <h3>{props.date.start} - {props.date.end}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Cards;