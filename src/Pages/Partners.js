import React, { Component } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import Microsoft from '../images/partners-microsoft.png';
import Tanium from '../images/partners-tanium.png';
import Genpact from '../images/partners-genpact.png';
class Partners extends Component { 
    render() {
      return(
          <div className="partnersctrls">
               <br></br>
               <Container>
               <h1 style={{textAlign:"center"}}>Partners</h1>
               <Row className="text-center">
                 <Col md={4}><img src={Microsoft} alt="Microsoft"/>
               </Col>
               <Col md={4}><img src={Tanium} alt="Tanium"/>
               </Col>
               <Col md={4}><img src={Genpact} alt="Genpact"/>
               </Col>
               </Row>
               
               <br></br> 
               <br></br> 
               <br></br> 
               <br></br> 
               <br></br> 
               <br></br> 
               </Container>
               
          </div>
      )
    }}
export default Partners
