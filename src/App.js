import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout';
import Pokelist from './Components/Pokelist';
import Home from './Components/Home';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokelist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;