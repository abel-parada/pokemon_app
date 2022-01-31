import React, {useEffect, useState} from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout';
import Pokelist from './Components/Pokelist';
import Home from './Pages/Home';
import './App.css'
import PokeSingle from './Components/PokeSingle';
import FavList from './Components/FavList';
import About from './Components/About'

function App() {

  const [favourites, setFavourites] = useState([]);

  const getArray = JSON.parse(localStorage.getItem('favourites')) || '0';

  useEffect(() =>{
    if(getArray !=0){
      setFavourites(getArray);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('favourites',JSON.stringify(favourites));
  },[favourites]);

  const favHandler = (pokemon) => {
    let item = favourites.some(item => item.id == pokemon.id); 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

    if(!item) {
      setFavourites(prevState => [...prevState,pokemon]);
      localStorage.setItem(pokemon.name, JSON.stringify(pokemon))
    }
    else {
      const newArray = [...favourites];
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      //splice methods takes 3 arguments
      newArray.splice(newArray.findIndex(index => index.id == pokemon.id),1);
      setFavourites(newArray);
      // console.log(newArray); // if no favourites will be empty
      localStorage.removeItem(pokemon.name);
    };
    // console.log("something is clicking")
    console.log(favourites)
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokelist favHandler={favHandler} favourites={favourites}/>} />
          <Route path="/:pokemonName" element={<PokeSingle />} />
          <Route path="favourites" element={<FavList favHandler={favHandler} favourites={favourites} />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;