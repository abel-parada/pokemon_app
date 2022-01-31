import React, {useState, useEffect} from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Button} from 'react-bootstrap';
import Loader from './Loader';

import axios from 'axios';

const PokeSingle = () => {

    let {pokemonName} = useParams();
    let navigate = useNavigate();

    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .catch(error => {
            console.log(error);
        })
        .then((res)=>{
            console.log(res.data);
            setPokemon(res.data);
            setIsLoading(false);
            console.log(pokemon)
        })

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
                    {!isLoading && (
                        <div>
                            <h2>{pokemon.name}</h2>
                            <img src={pokemon.sprites.other.dream_world.front_default} />
                            <p>Height:{pokemon.height}0 cm</p>
                            <p>
                                <strong>Type</strong>
                            </p>
                                <ul>
                                    {pokemon.types.map((attribute) => (
                                        <li key={attribute.type.name}>{attribute.type.name}</li>
                                        
                                    ))}
                                </ul>
                            
                            <p>
                                <strong>Abilities</strong>
                            </p>
                                <ul>
                                    {pokemon.abilities.map((attribute) => (
                                        <li key={attribute.ability.name}>{attribute.ability.name}</li>
                                        
                                    ))}
                                </ul>
                            
                        </div>
                    )}
                </Row>
                    <Button variant="outline-secondary" size='sm' onClick={()=> navigate('/pokedex')}>Back to list</Button>
            </Container>
        </div>
    );
};

export default PokeSingle;