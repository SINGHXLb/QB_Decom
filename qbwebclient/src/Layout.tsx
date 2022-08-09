import React from 'react';
import { Outlet } from "react-router-dom"; 
import Appmenu from './Appmenu';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface MenuModel {
    data: {
        isAuthenticated: boolean;
        isAdmin: boolean
    }
    handleMenuLogout: () => void
}
 
function Layout(props: MenuModel) {
    return (
       
            <Container  >
                <Row>
                    <Col>
                        <Appmenu data={props.data} handleMenuLogout={props.handleMenuLogout} />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Outlet />
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <Footer />
                    </Col>
                </Row>
            </Container> 
    );
}

export default Layout;


