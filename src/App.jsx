import React from 'react';
import Top from './components/Top';
import geoinfo from './assets/geo-info';

const App = () => {
  return(
    <div>
      <Top {...geoinfo} />
    </div>
  )
}

export default App;