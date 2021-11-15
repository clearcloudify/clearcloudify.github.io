import React, { Component } from 'react';   
import {Container, Row, Col} from 'react-bootstrap';
class Products extends Component { 

  render() { 
    const name = 'Products'
    return( 
     <div className="Productsection">
     <Container>
      <h1 className="text-center" id="demo">{name}</h1>
   <Row className="productsctrls"> 
     <Col md={4}>
        <div className="productsbox">
<h2  className="text-white">Clear Analytics</h2>
<p className="text-white">Clear Analytics aggregates data from a variety of sources, then leverage Microsoft’s Power BI features to enable you to wrangle, filter, model and visualize</p>
<a href="/">Read More <i className="fas fa-angle-right"></i></a>
        </div>
       </Col>
       <Col md={4}>
       <div className="productsbox">
          <h2>ClearGRC</h2>
          <p>ClearGRC leverages real-time monitoring and analysis to help you prepare for the unexpected while complying with regulatory requirements.</p>
          <a href="/">Read More <i className="fas fa-angle-right"></i></a>
          </div>
     
     </Col>
     <Col md={4}>
     <div className="productsbox">
          <h2>Clear Gateway</h2>
     <p>ClearPayment leverages real-time monitoring and analysis to help you prepare for the unexpected while complying with regulatory requirements.</p>
          <a href="/">Read More <i className="fas fa-angle-right"></i></a>
          </div>
     </Col>
   </Row>
  </Container>
     </div>
    );
  }}
  export default Products;