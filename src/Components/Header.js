import React, { Component } from 'react';  
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import Logo from '../images/logo.png';
import CloudStrategy from '../images/cloud-strategy.svg';
import CloudMigration from '../images/cloud-migration.svg';
import CloudModernization from '../images/cloud-modernization.svg';
import CloudNative  from '../images/cloud-native-dev.svg';
import Cloudisaster  from '../images/cloud-disaster.svg';
import CloudMonitoring from '../images/cloud-monitoring.svg';
import cloudInfra from '../images/cloud-infra.svg';  
import Button from 'react-bootstrap/Button';  

export class Header extends Component {  
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white" fixed="top">
  <Container>
  <Navbar.Brand href="/"><img src={Logo} alt="Logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end"> 
  <Nav>
      <Nav.Link href="/products">Products</Nav.Link>
      <NavDropdown title="Services" id="basic-nav-dropdown" renderMenuOnMount={true}>
        <Row>
        <Col md={2}>
          <NavDropdown.Item href="/cloud-strategy"><img src={CloudStrategy} alt="Cloud Strategy"/>Cloud Strategy</NavDropdown.Item> 
          </Col>
          <Col md={10}>
          <Row>  
          <Col md={4}>
          <NavDropdown.Item href="/cloud-migration"><img src={CloudMigration} alt="Cloud Migration"/>Cloud Migration</NavDropdown.Item>  
          </Col>
          <Col md={4}>
          <NavDropdown.Item href="/cloud-modernization"><img src={CloudModernization} alt="Cloud Modernization"/>Cloud Modernization</NavDropdown.Item> 
          </Col>
          <Col md={4}>
          <NavDropdown.Item href="/cloud-native-development"><img src={CloudNative} alt="Cloud Native"/>Cloud Native Development</NavDropdown.Item>
          
          </Col>
        </Row> 
        <Row>
          <Col md={4}>
          <NavDropdown.Item href="/cloud-disaster-recovery"><img src={Cloudisaster} alt="cloud demo"/>Cloud Disaster Recovery</NavDropdown.Item> 
          </Col>
          <Col md={4}>
          <NavDropdown.Item href="/cloud-monitoring"><img src={CloudMonitoring} alt="Cloud Monitoring"/>Cloud Monitoring</NavDropdown.Item> 
          </Col>
          <Col md={4}> 
          <NavDropdown.Item href="/cloud-infra-management"><img src={cloudInfra} alt="cloud demo"/>Cloud Infra Management</NavDropdown.Item>
          </Col>
        </Row>
          </Col>
        </Row> 
        </NavDropdown>
      
      <Nav.Link href="/industries">Case Studies</Nav.Link>
      <Nav.Link href="/events">Events</Nav.Link>
      <Nav.Link href="/partners">Partners</Nav.Link> 
      <Nav.Link href="/blog">Blog</Nav.Link>  
    </Nav>
    <Button className="headerbtn" href="/contact">CONTACT US</Button> 
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
  }

}

export default Header;