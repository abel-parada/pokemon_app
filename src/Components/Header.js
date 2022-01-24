import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
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
        </div>
    );
};

export default Header;