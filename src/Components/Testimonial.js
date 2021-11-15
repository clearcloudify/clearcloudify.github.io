import React, { Component } from 'react';  
import Carousel from 'react-bootstrap/Carousel';

class Testimonial extends Component { 
    render() {
        const name = "Client Testimonials";
      return( 
        <div className="testimonial-ctrls">

           <h1 className="text-center">{name}</h1>
           <Carousel fade> 
      <Carousel.Item interval={1000}>  
        <Carousel.Caption>
          <div className="testimonial-userprofile"> 
          <i className="fas fa-user-tie"></i>
          </div>
          <div className="testimonial-desc">
          <p>Clear InfoSec team  was able to  understand of our organization, size, knowledge quickly. They are more than willing to change scanning schedules, provide assistance with how to interpret support documentation and general support to ensure we can remain compliant </p>
           <strong>Kevin Jimenez - CTO</strong>
          </div> 
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={5000}>  
      <Carousel.Caption>
          <div className="testimonial-userprofile"> 
          <i className="fas fa-user-tie"></i>
          </div>
          <div className="testimonial-desc">
          <p>Clear InfoSec team  was able to  understand of our organization, size, knowledge quickly. They are more than willing to change scanning schedules, provide assistance with how to interpret support documentation and general support to ensure we can remain compliant </p>
           <strong>Kevin Jimenez - CTO</strong>
          </div> 
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={9000}>  
      <Carousel.Caption>
          <div className="testimonial-userprofile"> 
          <i className="fas fa-user-tie"></i>
          </div>
          <div className="testimonial-desc">
          <p>Clear InfoSec team  was able to  understand of our organization, size, knowledge quickly. They are more than willing to change scanning schedules, provide assistance with how to interpret support documentation and general support to ensure we can remain compliant </p>
           <strong>Kevin Jimenez - CTO</strong>
          </div> 
        </Carousel.Caption>
      </Carousel.Item> 
      
    </Carousel>  
        </div>
    )
}
}

export default Testimonial;
