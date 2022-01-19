import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar className="onion-bg" sticky="top" variant="light" collapseOnSelect expand="lg">
                <Navbar.Brand as={Link} to="/home" className="mar-10" href="#home"><img
                    src={logo}
                    width="160"
                    className="d-inline-block align-top"
                    alt=""
                /></Navbar.Brand>
                {/* <Form className="d-felx">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 rounded-pill"
                        aria-label="Search"
                    />
                </Form> */}

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end margin-10">
                    <Nav.Link className="color" as={Link} to="/breakfasts">Breakfast</Nav.Link>
                    <Nav.Link className="color" as={Link} to="/lunches">Lunch</Nav.Link>
                    <Nav.Link className="color" as={Link} to="/dinners">Dinner</Nav.Link>
                    <Nav.Link className="color" as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link className="color" as={Link} to="/signup">Sign up</Nav.Link>
                    <Nav.Link className="color" as={Link} to="/checkout"><ShoppingCartIcon /></Nav.Link>
                    {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        } */}
                    {<Navbar.Text>
                        <span>Signed in as: <a href="#">Random User</a></span>
                    </Navbar.Text>}
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;