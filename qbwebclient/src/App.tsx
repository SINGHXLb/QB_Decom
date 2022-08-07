import React from 'react'; 
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import Login from './Login';
import axios from 'axios'; 
import Layout from './Layout';
import Student from './Student';
import Admin from './Admin';

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
    const handleLogout = () =>
    {
           setLocalStorage("applicationSession", ""); //session
          setApplicationSession(""); //React variable  
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApplicationSession((applicationSession:any) => {
            var newState = Object.assign({}, applicationSession);
            newState.emailId = event.target.value.toString();
            return newState;
        }); 
    } 
    if (! applicationSession.isAuthenticated)
    {
        return <Login handleLogin={handleLogin} handleEmailChange={handleEmailChange} />;

    }

    return ( 
     <>
           
            {
                applicationSession.isAuthenticated &&
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<Layout data={applicationSession} handleMenuLogout={handleLogout} />}>
                            <Route path="/student" element={<Student />}></Route>
                            <Route path="/admin" element={<Admin/>}></Route>
                            {/*<Route path="/faculty/:id" element={<FacultyDetial />}></Route>*/}
                            {/*<Route path="/faculty/add" element={<FacultyAdd />}></Route>*/}
                            {/*<Route path="/faculty/edit/:id" element={<FacultyAdd />}></Route>*/}
                        </Route>
                    </Routes>
                </BrowserRouter>
            }
   </>
  );
}

export default App;
