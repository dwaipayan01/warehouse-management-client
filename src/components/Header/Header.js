import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import picture from "../../images/Banner/dj1.webp";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Button from 'react-bootstrap/Button';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img style={{ height: "35px" }} src={picture} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/blogs">blogs</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/manageinventory">Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="/itemlist">My items</Nav.Link></>


                            }


                        </Nav>
                        <Nav>
                            <Nav.Link href="#features">About</Nav.Link>
                            {user ?
                                <button onClick={handleSignout} className="btn btn-primary">Sign out</button>
                                :
                                <Nav.Link as={Link} eventKey={2} to="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;