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

//   const [nextList, setNextList] = useState();

  // useEffect takes two parameters: a function and an array.
  
// useEffect(()=>{},[]);

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) =>{
      // console.log(response);
      // console.log(response.data);

      // for the next button of 20 pokemons. API provides next and previous
    //   setNextList(response.data.next);
      // console.log(nextList);


      const fetches = response.data.results.map((p) =>
        axios.get(p.url).then((res) => res.data)
      );

      Promise.all(fetches).then((data) =>{
        setPokemons(data);
        setIsLoading(false);
      });
      console.log(pokemons); // It will show 20 pokemons
    });
  }, []);
  
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
              />
            ))}
        </Row>
      </Container>
      {/* <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '} */}
    </div>
  );
}

export default Pokelist;