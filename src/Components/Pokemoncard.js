import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import {LinkContainer} from "react-router-bootstrap";

import { Heart, HeartFill } from 'react-bootstrap-icons';


const Pokemoncard = ({name, image, pokemonName, type, fav, favClick}) => {
    return (
            <Card bg="dark" text="light" key={name}>
                <Card.Header className='d-flex justify-content-between'>
                  {name}
                  {fav ? (<HeartFill onClick={favClick} size='30' color='white'/>): (<Heart onClick={favClick} size='30' color='white'/>)}
                </Card.Header>

                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={image}
                  />
                </Card.Body>
                  <LinkContainer to={`/${pokemonName}`}>
                    <Button variant="outline-secondary" size='sm'>Read more</Button>
                  </LinkContainer>
              </Card>
    );
};

export default Pokemoncard;