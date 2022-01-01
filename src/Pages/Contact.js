import React from 'react';  
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

function Contact(props) {
  
  

  return (
    <Container>  <br></br>
    <h1 style={{textAlign:"center"}}>Contact</h1>
        <Row>
          <Col md={2}> 
          </Col>
          <Col md={8}>  
          <Form action="mailto:balaji@clearlcoudify.com" method="GET">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" required  /> 
  </Form.Group>
  <Row>
    <Col>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email"  required/> 
  </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Number</Form.Label>
    <Form.Control type="text" required /> 
  </Form.Group></Col>
  </Row>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Company Website</Form.Label>
    <Form.Control type="url" required /> 
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Message *</Form.Label>
    <Form.Control as="textarea" rows={3} required />
  </Form.Group>
   
   
   <div className="d-grid gap-2">
  <Button variant="primary" size="lg" type="submit">
  Submit
  </Button>
  
</div> <br></br><br></br>
</Form>
          </Col>
          <Col md={2}> 
          </Col>
        </Row>
      </Container>
  );
}

 

export default Contact;