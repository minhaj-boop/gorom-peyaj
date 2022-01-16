import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" bg="white" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">GCM</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link bg="dark" as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link bg="dark" as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link bg="dark" as={Link} to="/home#experts">Experts</Nav.Link>
                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        } */}
                        <Navbar.Text>
                            <span>Signed in as: <a href="#login">Random User</a></span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;