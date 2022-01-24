import React, { useEffect, useState } from 'react'; // This is for using Hooks!

import Header from './Components/Header';
import Pokelist from './Components/Pokelist';

function App() {
  
  return (
    <div>
      <Header />
      <Pokelist />
    </div>
  );
}

export default App;