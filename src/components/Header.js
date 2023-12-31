import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect,useState } from "react";

import './header.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const token = localStorage.getItem('token');
const navigate = useNavigate();

function  logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  navigate('/login');
  
}


return(

  <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light static-top">
  <Container>
    {/* <Navbar.Brand > villa </Navbar.Brand> */}
   
        <Nav.Link as={NavLink} exact to='/' className="villa" > Villa </Nav.Link>
       
    <Navbar.Toggle data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation"/>
    <Navbar.Collapse id="navbarSupportedContent" >
      <Nav className="navbar-nav ms-auto list" >
     
        <Nav.Link as={NavLink} exact to='/' id="home"> Home </Nav.Link>
       
        
    <Nav.Link as={NavLink} exact to="/properties">properties</Nav.Link>

        {/* <Nav.Link href="#link">property detail</Nav.Link> */}
        
        <Nav.Link as={NavLink} exact to='/contactus' >contact us</Nav.Link>
       
    
     <Nav.Link as={NavLink} exact to="/login" >login</Nav.Link>
        <Nav.Link  onClick={logout}>log out</Nav.Link>

        
        
        <Nav.Link as={NavLink} exact to="/register" >register</Nav.Link>
        
        <Nav.Link as={NavLink} exact to="/reserve" ><li><span href="#"><i class="fa fa-calendar"></i> Schedule a visit</span></li></Nav.Link>
        
       
        



      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

)


}

export default Header