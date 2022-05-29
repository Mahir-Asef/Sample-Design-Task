import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavAreaTwo = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#33FFBD' }} variant="dark">
                    <Container>
                        <Navbar.Brand style={{ color:'black',fontWeight:'bold' }} href="#home">Amazon</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto ">
                                <Link to='/home' style={{color:'black', marginRight:'10px', fontWeight:'700', textDecoration:'none'}}>Home</Link>
                                <Link to='/explore' style={{color:'black', marginRight:'10px', fontWeight:'700', textDecoration:'none'}}>Explore</Link>
                                <Link to='/activity' style={{color:'black', marginRight:'10px', fontWeight:'700', textDecoration:'none'}}>Activity</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default NavAreaTwo;