import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/logo.png';
import './Header.css';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div> 
            <div>
                <Navbar collapseOnSelect expand="lg" sticky='top'  className='menubar'  variant="dark">
                    <Container>
                        <Navbar.Brand >
                            <img height={40} src={logo} alt="" />
                            <h6>Photo Hunter</h6>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto ms-5">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            </Nav>
                            <Nav>
                            {
                                user? 
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;