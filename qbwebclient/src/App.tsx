import React from 'react'; 
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './App.css';
import FlashCard from './FlashCard';
import Login from './Login';
import axios from 'axios'; 

function App() { 

    const appstateO = {
        Authkey:"",
        userID: "",
        emailID:"",
        sessionID: "",
        loginTime: "", 
        isAuthenticted: false,
        isAdmin: false
    };
    const [applicationSession, setApplicationSession] = useState(appstateO); 

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {

        const urlP = 'https://localhost:7195/api/login';

        const data = '{"useremail": "' +applicationSession.emailID +'"}'


        axios.post(urlP, applicationSession)
            .then((response) => {
                var userstate: { authkey: string, emailID: string };

                var Authkey: string;  
                userstate = response.data; 
                Authkey = userstate.authkey; 
                console.log(Authkey);
                setApplicationSession((applicationSession) => {
                    var newState = Object.assign({}, applicationSession);
                    if (Authkey !== "") {
                        newState.isAuthenticted = true;
                        newState.Authkey = Authkey;
                    }
                    return newState;
                });

            })
            .catch(error => console.error('error login in'))  

        console.log(applicationSession);
       
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApplicationSession((applicationSession) => {
            var newState = Object.assign({}, applicationSession);
            newState.emailID = event.target.value.toString();
            return newState;
        });
      
    }


    return (
        <div className = "App">
        <Navbar bg="dark" variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">Crazy Monk</Navbar.Brand>
                    <Nav className="me-auto">
                        {applicationSession.isAuthenticted  && <Nav.Link href="/">Home</Nav.Link>}
                        {applicationSession.isAdmin &&  <Nav.Link href="/Admin">Admin</Nav.Link>}

          </Nav>
        </Container>

      </Navbar>

            <Container>

            
                     <Row>
                         <Col>
                            {
                            
                                applicationSession.isAuthenticted &&
                               <FlashCard /> 
                             }

                        {

                            !applicationSession.isAuthenticted &&
                            <Login handleLogin={handleLogin} handleEmailChange={handleEmailChange} />

                             }  
                           
                        </Col>
                   </Row>
               
            </Container>
        </div>
  );
}

export default App;
