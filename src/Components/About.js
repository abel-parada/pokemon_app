import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithubSquare } from "react-icons/fa";


const About = () => {
    return (
        <div className="App">
            <Container>
            <div className="article">
            <h1>About this APP</h1>
            <h2>WHO?</h2>
            <p>
                Hi! I am Abel Parada, chef, marketer, finance clerk, investor, actor and now early stage developer.
            </p>
            <h2>HOW DOES IT WORK?</h2>
            <p>
                This app shows my progress learning hooks and bootstrapt in 5 hours! See a list of our most beloved pokémons.
            </p>
            <h2>WHY?</h2>
            <p>
                Because I am obsessed with understanding how to talk to my computer to ask it to do stuff for me 🙃.
            </p>
            <h2>OMG! TELL ME MORE!</h2>
            <p>
                Check other projects and collaborations in my <a className='lean' href="http://github.com/abel-parada"><FaGithubSquare/> Github Account</a> I will keep it UP! 💪
            </p>
            </div>
            </Container>
        </div>
    )
};

export default About;