import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant='dark' sticky="top" expand="lg">
                <Container>

                    <Navbar.Brand>
                        <LinkContainer to ="/">
                            <Nav.Link>POKéDEX</Nav.Link>
                        </LinkContainer>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to ="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to ="/pokedex">
                            <Nav.Link>List</Nav.Link>
                        </LinkContainer>                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;