import React, { useEffect, useState } from 'react'; // This is for using Hooks!

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading]= useState(true);

  const [nextList, setNextList] = useState();

  // useEffect takes two parameters: a function and an array.
  
// useEffect(()=>{},[]);

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) =>{
      // console.log(response);
      // console.log(response.data);

      // for the next button of 20 pokemons. API provides next and previous
      setNextList(response.data.next);
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
      <Navbar bg="dark" variant='dark' sticky="top">
          <Container>
            <Navbar.Brand href="#">Pokédex</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
        <Row
          xs={2}
          md={4}
          lg={5}
          className="justify-content-between my-5 d-flex gap-3"
        >
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {!isLoading &&
            pokemons.map((pokemon) => (
              <Card bg="dark" text="light" key={pokemon.name}>
                <Card.Header>{pokemon.name}</Card.Header>

                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={pokemon.sprites.other.dream_world.front_default}
                  />
                </Card.Body>
              </Card>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;