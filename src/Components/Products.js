import React, { Component } from 'react';   
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Products extends Component { 

  render() { 
    const name = 'Service Offerings'
    return( 
     <div className="Productsection">
     <Container>
      <h1 className="text-center" id="demo">{name}</h1>
      <p className="text-center">Our team of Cloud Advocates and Engineers will provide technology leadership, strategy, best practices,
research, implementation, support and training to seamlessly move your IT workloads to Cloud. Our
multi-disciplinary team will drive your cloud adoption efforts across the organization, including
developing cloud best practices, mobilizing resources, establishing migration timelines, and leading the
organization through large-scale transformations. Our Cloud CoE enables the organizations to balance
speed and stability in the pursuit of their Digital Modernization journey.
</p> 

   <Row className="productsctrls sectionew">  
   <Col md={3}>
       <div className="productsbox">
          <h2>Cloud Native Development</h2>
          <p>Microservices Development, Containerization, Serverless Deployment, Micro-segmentation, and Cloud Native Replatforming.</p>
          <Link to="/cloud-native-development">Learn More <i className="fas fa-angle-right"></i></Link> 
          </div>
     
     </Col>
     <Col md={3}>
        <div className="productsbox">
<h2  className="text-white">Cloud Modernization</h2>
<p className="text-white">Building an Agile Cloud Native Platform, Cloud Adoption in Microservices based Architecture, Cloud Governance and Policy</p>
<Link to="/cloud-monitoring">Learn More <i className="fas fa-angle-right"></i></Link>
        </div>
       </Col>
     <Col md={3}>
     <div className="productsbox">
          <h2>Cloud Disaster Recovery</h2>
     <p>Application Protection, Remote Management of all Backups, Customized Disaster Recovery planning and execution.</p>
          <Link to="/cloud-disaster-recovery">Learn More <i className="fas fa-angle-right"></i></Link>
          </div>
     </Col>  
       <Col md={3}>
       <div className="productsbox">
          <h2>Cloud Infra Management</h2>
          <p>Cloud Data Center Design, Development and Implementation, Operation Management, Cloud Infrastructure and Application Deployment.</p>
          <Link to="/cloud-infra-management">Learn More <i className="fas fa-angle-right"></i></Link>
          </div> 
     </Col> 
   </Row>
   <Row className="productsctrls"> 
     <Col md={3}>
        <div className="productsbox">
<h2  className="text-white">Cloud Strategy</h2>
<p className="text-white">Cloud Readiness Assessment, Cloud Architecture Audit, Cloud Roadmap and Strategy, Multi-Cloud Strategy, Cloud Feasibility Study</p>
<Link to="/cloud-strategy">Learn More <i className="fas fa-angle-right"></i></Link>
        </div>
       </Col>
       
     <Col md={3}>
     <div className="productsbox">
          <h2>Cloud Migration</h2>
     <p>Readiness Assessment, Cloud-to-Cloud movement, Migration of Workloads, Validation and Performance Testing.</p>
          <Link to="/cloud-migration">Learn More <i className="fas fa-angle-right"></i></Link>
          </div>
     </Col>
     <Col md={3}>
        <div className="productsbox">
<h2  className="text-white">Cloud Monitoring</h2>
<p className="text-white">Cloud-based Application Monitoring, Creating personalized parameters and checks, Setting up Personalized Alerts</p>
<Link to="/cloud-monitoring">Learn More <i className="fas fa-angle-right"></i></Link>
        </div>
       </Col>
       <Col md={3} >
       <div className="productsbox">
          <h2>Cloud Security</h2>
          <p> Security and Risk Assessment, Data Protection, Vulnerability Management, Continuous Monitoring, Alerting and Reporting.</p>
          <Link to="/cloud-security">Learn More <i className="fas fa-angle-right"></i></Link>
          </div>
     
     </Col>
      
   </Row>
  </Container>
     </div>
    );
  }}
  export default Products;