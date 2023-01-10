import React from 'react';
import Card from './Card';
import geoinfo from '../assets/geo-info';

const Cards = () => {  
  const cards = geoinfo.map( destination => {
    return(
      <Card 
        key={destination.id}
        {...destination}
      />
    )}
  )
  
  return(
    <div>
      {cards}
    </div>
  )    
}

export default Cards;