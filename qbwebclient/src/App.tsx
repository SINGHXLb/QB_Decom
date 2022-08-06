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
        token:"",
        userId: "",
        emailId:"",
        sessionId: "",
        loginTime: "", 
        isAuthenticated: false,
        isAdmin: false
    };

    const setLocalStorage = (key: string, value: any) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    const getLocalStorage = (key: string, initialValue: any) => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        } catch (e) {
       
            // if error, return initial value
            return initialValue;
        }
    }


    const [applicationSession, setApplicationSession] = useState(() =>
        getLocalStorage("applicationSession", appstateO)); 

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {

        const urlP = 'https://localhost:7195/api/login';

        //const data = '{"useremail": "' +applicationSession.emailID +'"}'


        axios.post(urlP, applicationSession)
            .then((response) => {
                var loginResponse: {
                    token: string,
                    userName: string, validaty: string,
                    id: string, emailId: string
                };

                var token: string;  
                loginResponse = response.data; 
                token = loginResponse.token; 
              
                setApplicationSession((applicationSession:any) => {
                    var newState = Object.assign({}, applicationSession);
                    if (token !== "") {
                        newState.isAuthenticated = true;
                        newState.token = token;
                    }
                    setLocalStorage("applicationSession", newState);
                    return newState;
                }); 

            })
            .catch(error => console.error('error login in'))  

        

    }
    const handleNavigation = (key: string | null) => {

        if (key === 'Logout') {
            setLocalStorage("applicationSession", ""); //session
            setApplicationSession(""); //React variable  
        }
        else
        {
            console.log('no action , key = ' + key);

        }
       
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApplicationSession((applicationSession:any) => {
            var newState = Object.assign({}, applicationSession);
            newState.emailId = event.target.value.toString();
            return newState;
        });
      
    }

    


    return (
        <div className = "App">
        <Navbar bg="dark" variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">Crazy Monk</Navbar.Brand>
                    <Nav className="me-auto" onSelect={(selectedKey) => handleNavigation(selectedKey)} >
                        {applicationSession.isAuthenticated  && <Nav.Link href="/">Home</Nav.Link>}
                        {applicationSession.isAdmin && <Nav.Link href="/Admin">Admin</Nav.Link>}

                        {applicationSession.isAuthenticated && <Nav.Link eventKey="Logout" >Logout</Nav.Link>}

          </Nav>
        </Container>

      </Navbar>

            <Container>

            
                     <Row>
                         <Col>
                            {
                            
                            applicationSession.isAuthenticated &&
                               <FlashCard /> 
                             }

                        {

                            !applicationSession.isAuthenticated &&
                            <Login handleLogin={handleLogin} handleEmailChange={handleEmailChange} />

                             }  
                           
                        </Col>
                   </Row>
               
            </Container>
        </div>
  );
}

export default App;
