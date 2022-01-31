import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout';
import Pokelist from './Components/Pokelist';
import Home from './Pages/Home';
import './App.css'
import PokeSingle from './Components/PokeSingle';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokelist />} />
          <Route path="/:pokemonName" element={<PokeSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;