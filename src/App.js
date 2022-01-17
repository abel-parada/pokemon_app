import React, { useEffect, useState } from 'react'; // This is for using Hooks!
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);

  // useEffect takes two parameters: a function and an array.
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => setPokemons(response.data.results) )
  },[]);

  
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


        <Container >
        <Row xs={2} md={4} lg={5} className='justify-content-between my-5 d-flex gap-3'>
          <Col>
          <Card bg="dark" text="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              {/* <Card.Title>{pokemons.results[0].name}</Card.Title> */}
              <Card.Text>
                Definition of the pokémon
              </Card.Text>
              {/* <Button variant="dark">More info!</Button> */}
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;