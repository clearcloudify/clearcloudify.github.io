import React from 'react';  
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import {useDropzone} from 'react-dropzone'; 
import { InlineWidget } from "react-calendly";


function Contact(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  

  return (
    <Container> <br></br>
        <Row>
          <Col md={2}> 
          </Col>
          <Col md={8}>
            <h5>1. Tell us about your company</h5>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"  /> 
  </Form.Group>
  <Row>
    <Col>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" /> 
  </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Number</Form.Label>
    <Form.Control type="text" /> 
  </Form.Group></Col>
  </Row>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Company Website</Form.Label>
    <Form.Control type="text"  /> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>What’s your company’s biggest challenge today?</Form.Label>
    <Form.Control type="text"  /> 
  </Form.Group>
  <h5>2. What are you looking to work on?</h5>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Describe your project briefly *</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
   <h5>What’s your budget?</h5>

   <Form.Check
          type="radio"
          label="$0 - $500"
          name="clearmeghabudget"
          id="0-500"
        />
        <Form.Check
          type="radio"
          label="$500 - $1000"
          name="clearmeghabudget"
          id="500-1000"
        />
        <Form.Check
          type="radio"
          label="$1000 - $5000"
          name="clearmeghabudget"
          id="1000-5000"
        />
         <Form.Check
          type="radio"
          label="$5000 - $10000"
          name="clearmeghabudget"
          id="5000-10000"
        />
           <Form.Check
          type="radio"
          label="$10000 - $50000"
          name="clearmeghabudget"
          id="10000-50000"
        />
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag or browse your project brief</p>
      </div>
      <aside> 
        <ul>{files}</ul>
      </aside> 


  <h5>3. What services are you interested in?</h5>
  <Row>
    <Col md={6}>
    <Form.Group className="mb-3" controlId="webmobile">
    <Form.Check type="checkbox" label="Web or Mobile Apps Development" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="customsoftware">
    <Form.Check type="checkbox" label=" Custom Software Development" />
  </Form.Group>
    </Col>
    <Col md={6}>
    <Form.Group className="mb-3" controlId="softwaretesting">
    <Form.Check type="checkbox" label="Software Testing and QA" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="apidev">
    <Form.Check type="checkbox" label="API Development & Integration" />
  </Form.Group>
    </Col>
  </Row>
  
  
  <InlineWidget url="https://calendly.com/clearmegha/experiment1et" />
  <br></br>  
   <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
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