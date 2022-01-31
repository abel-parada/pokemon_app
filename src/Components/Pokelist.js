/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'; // This is for using Hooks!

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

import Pokemoncard from './Pokemoncard';
import Loader from './Loader';

function Pokelist() {

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading]= useState(true);

  const [nextPokemons, setNextPokemons] = useState('https://pokeapi.co/api/v2/pokemon')


//   const [nextList, setNextList] = useState();

  // useEffect takes two parameters: a function and an array.
  
// useEffect(()=>{},[]);

useEffect(()=>{
  getPokemons();
},[]);

  const getPokemons = () =>{
    axios.get(nextPokemons)
    .catch(error => {
      console.log(error);
    })
    .then((res) =>{
      // console.log(res);
      // console.log(res.data);

      // for the next button of 20 pokemons. API provides next and previous
    //   setNextList(res.data.next);
      // console.log(nextList);


      const fetches = res.data.results.map((p) =>
        axios.get(p.url).then((res) => res.data)
      );

      setNextPokemons(res.data.next);

      Promise.all(fetches).then((data) =>{
        setPokemons((prevState) => [...prevState, ...data]);
        setIsLoading(false);
      });
      console.log(pokemons); // It will show 20 pokemons
    });
  };
  
  return (
    <div>
        <Container>
        <Row
          xs={2}
          md={4}
          lg={5}
          className="justify-content-between my-5 d-flex gap-3"
        >
          {isLoading && (
            <Loader />
          )}
          {!isLoading &&
            pokemons.map((pokemon) => (
              <Pokemoncard 
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                pokemonName={pokemon.name}
              />
            ))}
        </Row>
      </Container>
      <div className="d-grid gap-2 justify-content-center">
        <Button variant="secondary" size="lg" onClick={getPokemons}>
          Next 20
        </Button>
      </div>
    </div>
  );
}

export default Pokelist;