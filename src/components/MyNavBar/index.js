import React from "react";
import { Navbar, Nav, Form, FormControl,Button } from 'react-bootstrap';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MyNavBar() {
    return (
        <Navbar variant='dark' style={{ backgroundColor: "#212121" }} expand="lg" className='header'>
            <Navbar.Brand className='navbar-brand' href="">DHANI POZNIAK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-item">
                    <Nav.Link className="nav-link" href='/'><i className="fab fa fa-home"></i></Nav.Link>
                    <Nav.Link className="nav-link" href="https://github.com/pozengineer" target='_blank'><i className="fab fa fa-github"></i></Nav.Link>
                    <Nav.Link className="nav-link" href="https://linkedin.com/in/dhani-pozniak-34801a196" target='_blank'><i className="fab fa fa-linkedin-square"></i></Nav.Link>
                    <Nav.Link className="nav-link" href='/projects'>Projects</Nav.Link>
                    <Nav.Link className="nav-link" >Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default MyNavBar;
