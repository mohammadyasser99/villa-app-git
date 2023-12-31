import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const DashboardHeader = () => {

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={NavLink} exact to="/dashboard" >villa-dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} exact to="/dashboard/slideshow">slideshow</Nav.Link>
              <Nav.Link as={NavLink} exact to="/dashboard/properties">properties</Nav.Link>
              <Nav.Link as={NavLink} exact to="/dashboard/user">user</Nav.Link>
              <Nav.Link as={NavLink} exact to="/dashboard/login">login</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

}


export default DashboardHeader;