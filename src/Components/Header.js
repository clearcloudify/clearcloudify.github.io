import React, { Component } from 'react';  
import { Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';
import Logo from '../images/logo.svg';
import CloudStrategy from '../images/cloud-strategy.svg';
import CloudMigration from '../images/cloud-migration.svg';
import CloudModernization from '../images/cloud-modernization.svg';
import CloudNative  from '../images/cloud-native-dev.svg';
import Cloudisaster  from '../images/cloud-disaster.svg';
import CloudMonitoring from '../images/cloud-monitoring.svg';
import cloudInfra from '../images/cloud-infra.svg';   
import { Link } from 'react-router-dom'

export class Header extends Component {  
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white" fixed="top">
        <Container>
        <Navbar.Brand href="/"><img src={Logo} alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end"> 
            <Nav> 
            <NavDropdown title="Services" id="basic-nav-dropdown" renderMenuOnMount={true}>
            <NavDropdown.Item><Link to="/cloud-strategy"><img src={CloudStrategy} alt="Cloud Strategy"/>Cloud Strategy</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/cloud-native-development"><img src={CloudNative} alt="Cloud Native"/>Cloud Native Development</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/cloud-monitoring"><img src={CloudMonitoring} alt="Cloud Monitoring"/>Cloud Monitoring</Link></NavDropdown.Item> 
            <NavDropdown.Item><Link to="/cloud-migration"><img src={CloudMigration} alt="Cloud Migration"/>Cloud Migration</Link></NavDropdown.Item> 
            <NavDropdown.Item><Link to="/cloud-security"><img src={CloudStrategy} alt="Cloud Security"/>Cloud Security</Link></NavDropdown.Item> 
            <NavDropdown.Item><Link to="/cloud-modernization"><img src={CloudModernization} alt="Cloud Modernization"/>Cloud Modernization</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/cloud-disaster-recovery"><img src={Cloudisaster} alt="cloud demo"/>Cloud Disaster Recovery</Link></NavDropdown.Item>   
            <NavDropdown.Item><Link to="/cloud-infra-management"><img src={cloudInfra} alt="cloud demo"/>Cloud Infra Management</Link></NavDropdown.Item> 
            </NavDropdown> 
            <Nav.Link><Link to="/industries">Case Studies</Link></Nav.Link>
            <Nav.Link><Link to="/events">Events</Link></Nav.Link>
            <Nav.Link><Link to="/partners">Partners</Link></Nav.Link>
            <Nav.Link><Link to="/ourteam">About</Link></Nav.Link>
            <Nav.Link><Link to="/blog">Blog</Link></Nav.Link> 
            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            </Nav> 
          {/* <Button className="headerbtn" href="/contact">CONTACT US</Button>  */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

}

export default Header;