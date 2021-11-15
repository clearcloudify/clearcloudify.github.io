import React, { Component } from 'react';   
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Secure from '../images/Secure.png';
import Compliant from '../images/Compliant.png';
import Hybrid from '../images/Hybrid.png';
import Scalable from '../images/Scalable.png';

class Services extends Component {  
  render() { 
    const name = 'Services'
    return(  
      <div className="Services">
        <Container>
          <Row>
          <h1 className="text-center">{name}</h1>
            <Col md={3}>
              <div className="serviceslist">
              <img src={Secure} alt="Secure"></img>
              <h3>Secure</h3>
              <p>Comprehensive security capabilities to
satisfy the most demanding
requirements.</p>
              </div>
             
            </Col>
            <Col md={3}>
            <div className="serviceslist">
              <img src={Compliant} alt="Compliant"></img>
              <h3>Compliant</h3>
              <p>Rich controls, auditing and broad security accreditations.</p>
              </div>
            </Col>
            <Col md={3}>
            <div className="serviceslist">
            <img src={Hybrid} alt="Hybrid"></img>
             <h3>Hybrid</h3>
             <p>Build hybrid architectures that extend your on-premises infrastructure to the Cloud.</p>
            </div>
            </Col>
            <Col md={3}>
            <div className="serviceslist">
            <img src={Scalable} alt="Scalable"></img>
              <h3>Scalable</h3>
              <p>Access as much or as little as you need, and scale up and down as required with only a few minutes notice.</p>
           </div>
            </Col>
          </Row>
        </Container>
      </div> 
    );
  }}
  export default Services;