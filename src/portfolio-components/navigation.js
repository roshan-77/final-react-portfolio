import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


const Navigation = () =>{
    return(
        <Navbar className = "global-container" collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container style={{padding: 0}}>
			  <Navbar.Brand href="#home">ROSHAN</Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="me-auto">
			      <Nav.Link href="#aboutme">HOME</Nav.Link>
			      <Nav.Link href="#whatido">SERVICES</Nav.Link>
			      <Nav.Link href="#recentworks">PORTFOLIO</Nav.Link>
			      <Nav.Link href="#resume">RESUME</Nav.Link>
			      <Nav.Link href="#contact">CONTACT</Nav.Link>
			    </Nav>
			    <Nav className="">
			      <Nav.Link href="#resume" style={{backgroundColor:"#FFDB58", borderRadius:"20px", color:"black", textAlign:"center"}}>Download CV</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Container>
		</Navbar>
    )
}

export default Navigation