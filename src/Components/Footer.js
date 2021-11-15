import React, { Component } from 'react';  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
class Footer extends Component { 
  render() {
    return( 
        <div>
            <footer>
                <Container>
                    <Row>
<Col md={3}>
<ul>
    <h5>About Clear Megha</h5>
       <li><a href="/">What Is ClearMegha?</a></li>
       <li><a href="/">What Is Cloud Computing</a></li>
       <li><a href="/">What Is DevOps?</a></li>
       <li><a href="/">What Is a Container?</a></li>
       <li><a href="/">What Is a Data Lake?</a></li>  
       <li><a href="/">What's New</a></li>
       <li><a href="/">Blogs</a></li>
       <li><a href="/">Press Releases</a></li>
   </ul>
</Col>
<Col md={3}> 
<h5>Products</h5>
   <ul>
       <li><a href="/">Clear Query</a></li>
       <li><a href="/">Clear Data Loader</a></li>
       <li><a href="/">Clear Price Master</a></li>
       <li><a href="/">Clear Infosec</a></li>  
       <li><a href="/">Clear GRC</a></li> 
       <li><a href="/">Clear Dhan</a></li> 
       <li><a href="/">Clear Query</a></li> 
       <li><a href="/">Clear Analytics</a></li> 
   </ul>
</Col>
<Col md={3}>
     <h5>Solutions</h5> 
 <ul>
       <li><a href="/">Archiving</a></li>
       <li><a href="/">Backup and Restore</a></li>
       <li><a href="/">Blockchain</a></li>
       <li><a href="/">Cloud Migration</a></li>  
       <li><a href="/">Containers</a></li>
       <li><a href="/">Content Delivery</a></li>
       <li><a href="/">Database Migrations</a></li>
       <li><a href="/">DevOps</a></li>  
   </ul>
</Col>
<Col md={3}>
    <h5>Help</h5> 
    <ul>
       <li><a href="/">Contact Us</a></li>
       <li><a href="/">Careers</a></li>
       <li><a href="/">Support Ticket</a></li>
       <li><a href="/">Knowledge Center</a></li>  
       <li><a href="/">Support</a></li>
       <li><a href="/">Legal</a></li>
   </ul>
   <a href="https://www.facebook.com/AnaDataConsultingInc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/AnaDataDesk" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/ana-data-consulting" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a> 
            <a href="https//www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
</Col>
                    </Row>
                    
                </Container>
            </footer> 
            <div className="Sitefooter">
                <Container>
                <Row>
                        <Col className="text-center" >
                        <a href="/privacy">Privacy</a> | <a href="/">Site Terms</a> | <a href="/">Cookie Preferences</a> | &copy; 2021, Clear Megha. All rights reserved.
                        </Col> 
                    </Row>
                </Container> 
            </div>
        </div>   
    );
  }

}

export default Footer;