import React from 'react';

import { Navbar, Container } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
          <Navbar bg="dark" variant='dark' absolute="bottom" expand="lg">
                <Container className='d-flex justify-content-center align-items-center'>
                    <Navbar.Brand href="#"><p>Abel Parada. &copy; 2021. Visit my <strong><a href="https://github.com/abel-parada"><FaGithub /> @abel-parada</a></strong></p>
                    </Navbar.Brand>
                </Container>
            </Navbar>
    );
};

export default Footer;

