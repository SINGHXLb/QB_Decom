import './Login.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



interface LoginInterface {
    handleLogin: React.MouseEventHandler<HTMLButtonElement>
    handleEmailChange: React.ChangeEventHandler<HTMLInputElement> 

    //(event: React.MouseEvent<HTMLInputElement, MouseEvent>, index: number) => void

}

function Login(prop: LoginInterface ) { 


    return (
        <Container>
            
            <Row>
                <Col md="3">
                    <h3>Log In</h3>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={prop.handleEmailChange}
                    /> 
                  
                </Col> 
            </Row> 
            <Row>
                <Col md="3">
                    {
                        <button className="btn btn-primary" onClick={prop.handleLogin} >
                            Login
                        </button>
                    }
                </Col> 
            </Row>


        </Container>
    );
}


export default Login;