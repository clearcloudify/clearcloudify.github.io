import React, { Component } from 'react';  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
class Footer extends Component { 
  render() {
    return(  
        <React.Fragment> 
            <div className="Sitefooter">
                <Container>
                <Row>
                        <Col className="text-left footctrls" md={8}>
                        <a href="/privacy">Privacy</a> | <a href="/">Site Terms</a> | <a href="/">Cookie Preferences</a> | &copy; 2022, Clear Cloudify. All rights reserved.
                        </Col> 
                        <Col md={4} className="text-right">
                        <a href="https://www.linkedin.com/company/clear-cloudify" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a> 
            <a href="https://www.youtube.com/channel/UC24fk1q4r5rk3d6u0K11dGg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://github.com/clearcloudify" target="_blank" rel="noopender noreferrer"><i className="fab fa-github"></i></a>

                        </Col>
                       
                    </Row>
                </Container> 
            </div> 
        </React.Fragment> 
    );
  }

}

export default Footer;