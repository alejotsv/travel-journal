import React from 'react';
import Top from './components/Top';
import Cards from './components/Cards';
import geoinfo from './assets/geo-info';

const App = () => {
  return(
    <div>
      <Top />
      <Cards {...geoinfo} />
    </div>
  )
}

export default App;