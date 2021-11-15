import React, { Component } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
class Partners extends Component { 
    render() {
      return(
          <div className="partnersctrls">
               <br></br>
               <Container>
               <h1 style={{textAlign:"center"}}>Partners</h1>
               <Row>
                 <Col md={4}><img src={"https://anadata.com/sites/default/files/partners-microsoft.png"} alt="Microsoft"/>
               </Col>
               <Col md={4}><img src={"https://anadata.com/sites/default/files/partners-tanium.png"} alt="Microsoft"/>
               </Col>
               <Col md={4}><img src={"https://anadata.com/sites/default/files/partners-genpact.png"} alt="Microsoft"/>
               </Col>
               </Row>
               </Container>
               
               <br></br> 
          </div>
      )
    }}
export default Partners
