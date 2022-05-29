import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavArea.css'
import { MdNightlight } from 'react-icons/md';


const NavArea = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" className='back' style={{padding:'18px 0'}} variant="dark">
                    <Container>
                        <Link to='/home'><img src="https://i.ibb.co/ZmB7J2h/2.png" alt="" width="120px" color="white" /></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ho">
                            <Link to='/home'>Home</Link>
                            <Link to='/explore'>Explore</Link>
                            <Link to='/activity'>Activity</Link>
                            <Link to='/community'>Community</Link>
                            <Link to='/page'>Page</Link>
                            <Link to='/contact'>Contact</Link>
                        </Nav>
                        <h6 style={{color:'white', backgroundColor:'#1D0F23', padding:'10px 20px', border:'1px solid blue', borderRadius:'15px', marginTop:'7px', fontSize:'12px', fontWeight:'700'}}>Wallet Connect</h6>
                        <span style={{color:'white', fontSize:'25px', backgroundColor:'#272223', marginLeft:'15px', padding:'2px 10px'}}> <MdNightlight /> </span>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default NavArea;