import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css';
import FlashCard from './FlashCard';


function App() {
    return (
        <div>
        <Navbar bg="dark" variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Admin">Admin</Nav.Link> 

          </Nav>
        </Container>

      </Navbar>
        <Container>
            <Row>
                <Col>
                    <div className="App">
                        <FlashCard />
                    </div>

                </Col>
            </Row>
          
            </Container>
            </div>
  );
}

export default App;
