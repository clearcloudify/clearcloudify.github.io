import React, { Component } from 'react';  
import SliderImage from '../images/slidernew.svg'; 
import Carousel from 'react-bootstrap/Carousel';  
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class SliderComponent extends Component { 
  render() {
    return(
      <div>
 <Carousel fade> 
      <Carousel.Item interval={1000}> 
      <div className="sliderimgctrls">
      <img src={SliderImage} className="clearslider" alt="Clear Cloudify Slider" />
         
      </div> 
        <Carousel.Caption>
          <h1>Accelerate your Digital Modernization</h1>
          <p>Our team of Cloud Advocates and Engineers will provide technology leadership, best practices, research, implementation, support and training to seamlessly move your IT workloads to Cloud.</p>
<Button><Link to="/contact">Let's Cloudify »</Link></Button>
        </Carousel.Caption>
      </Carousel.Item> 
           
    </Carousel>  
   
      </div>
     
    );
  }}
  export default SliderComponent;