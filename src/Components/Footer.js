import React from 'react';

import { Navbar, Container } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
          <Navbar bg="dark" variant='dark' relative="bottom" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><p>Abel Parada. &copy; 2021. Visit my <strong><a href="https://github.com/abel-parada"><FaGithub /> @abel-parada</a></strong></p>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;

