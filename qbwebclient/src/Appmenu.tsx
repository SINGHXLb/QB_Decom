import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


interface MenuModel {
    data: {
        isAuthenticated: boolean;
        isAdmin: boolean
    }
    handleMenuLogout : ()=>void 
}


function Appmenu(props: MenuModel) {

    const handleNavigation = (key: string | null) => { 
        if (key === 'Logout') {
            props.handleMenuLogout(); 
        }
        else {
            console.log('no action , key = ' + key); 
        } 
    };
    return (
        <Navbar bg="dark" variant="dark" className="Navbar">

            <Navbar.Brand href="#home">Crazy Monk</Navbar.Brand>
            <Nav className="me-auto" onSelect={(selectedKey) => handleNavigation(selectedKey)} >
                {props.data.isAuthenticated && <Nav.Link href="/">Home</Nav.Link>}
                {props.data.isAuthenticated && <Nav.Link href="/student">Student</Nav.Link>}
                {props.data.isAdmin && <Nav.Link href="/admin">Admin</Nav.Link>}
                {props.data.isAuthenticated && <Nav.Link eventKey="Logout" >Logout</Nav.Link>}
            </Nav>
        </Navbar>
    );
}

export default Appmenu;
