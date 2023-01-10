import React from 'react';
import { useState } from 'react';

const Card = (props) => {
  const [id, setId] = useState(props.id);
  const [img, setImg] = useState(props.img);
  const [country, setCountry] = useState(props.country);
  const [map_link, setMap_link] = useState(props.map_link);
  const [place, setPlace] = useState(props.place);
  const [date, setDate] = useState(props.date);
  const [description, setDescription] = useState(props.description);

  return(
    <div className='card'>
      <img src={`../../public/${img}`} alt='this place' height='225' width='300'/>
      <div className='destination-content'>
        <div className='location'>
          <h3>{country}</h3>
          <a href={map_link} target='blank' >View on Google Maps</a>
        </div>
        <h2>{place}</h2>
        <h3>{date.start} - {date.end}</h3>
        <p>{description}</p>
      </div>      
    </div>
  )
}

export default Card