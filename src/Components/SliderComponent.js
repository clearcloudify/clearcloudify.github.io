import React, { Component } from 'react';  
import SliderImage from '../images/slidernew.png'; 
import Carousel from 'react-bootstrap/Carousel'; 
import Sliderperson from '../images/cloudperson.png';
import Button from 'react-bootstrap/Button';

class SliderComponent extends Component { 
  render() {
    return(
      <div>
 <Carousel fade> 
      <Carousel.Item interval={1000}> 
      <div className="sliderimgctrls">
      <img src={SliderImage} className="clearslider" alt="Clear Megha Slider" />
        <img src={Sliderperson}  className="clearslider slideperson" alt="Sliderperson"/>
      </div> 
        <Carousel.Caption>
          <h1>Cloud Strategy</h1>
          <p>Cloud Readiness Assessment, Cloud Architecture Audit, Cloud Roadmap and Strategy, Multi-Cloud Strategy, Cloud Fitment Analysis.</p>
<Button>Read More <i className="fas fa-angle-right"></i></Button>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={3000}> 
      <div className="sliderimgctrls">
      <img src={SliderImage} className="clearslider" alt="Clear Megha Slider" />
        <img src={Sliderperson}  className="clearslider slideperson" alt="Sliderperson"/>
      </div> 
        <Carousel.Caption>
          <h1>Cloud Migration</h1>
          <p>Readiness Assessment, SWOT Analysis, Cloud-to-cloud movement, Migration of Workloads, Validation and performance testing.</p>
<Button>Read More <i className="fas fa-angle-right"></i></Button>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={5000}> 
      <div className="sliderimgctrls">
      <img src={SliderImage} className="clearslider" alt="Clear Megha Slider" />
        <img src={Sliderperson}  className="clearslider slideperson" alt="Sliderperson"/>
      </div> 
        <Carousel.Caption>
          <h1>Cloud Modernization</h1>
          <p>Building an Agile Cloud Native Platform, Cloud Adoption in Microservices based Architecture, Cloud Governance and Policy.</p>
<Button>Read More <i className="fas fa-angle-right"></i></Button>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={7000}> 
      <div className="sliderimgctrls">
      <img src={SliderImage} className="clearslider" alt="Clear Megha Slider" />
        <img src={Sliderperson}  className="clearslider slideperson" alt="Sliderperson"/>
      </div> 
        <Carousel.Caption>
          <h1>Cloud Native Development</h1>
          <p>Cloud Readiness Assessment, Cloud Architecture Audit, Cloud Roadmap and Strategy, Multi-Cloud Strategy, Cloud Fitment Analysis.</p>
<Button>Read More <i className="fas fa-angle-right"></i></Button>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={9000}> 
      <div className="sliderimgctrls">
      <img src={SliderImage} className="clearslider" alt="Clear Megha Slider" />
        <img src={Sliderperson}  className="clearslider slideperson" alt="Sliderperson"/>
      </div> 
        <Carousel.Caption>
          <h1>Cloud Disaster Recovery</h1>
          <p>Application Protection, Remote Management of all Backups, Customized Disaster Recovery planning and execution.</p>
<Button>Read More <i className="fas fa-angle-right"></i></Button>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={10000}> 
      <div className="sliderimgctrls">
      <img src={SliderImage} className="clearslider" alt="Clear Megha Slider" />
        <img src={Sliderperson}  className="clearslider slideperson" alt="Sliderperson"/>
      </div> 
        <Carousel.Caption>
          <h1>Cloud Monitoring</h1>
          <p>Cloud-based Application Monitoring, Creating personalized parameters and checks, Setting up Personalized Alerts.</p>
<Button>Read More <i className="fas fa-angle-right"></i></Button>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item interval={10000}> 
      <div className="sliderimgctrls">
      <img src={SliderImage} className="clearslider" alt="Clear Megha Slider" />
        <img src={Sliderperson}  className="clearslider slideperson" alt="Sliderperson"/>
      </div> 
        <Carousel.Caption>
          <h1>Clolud Infra Management</h1>
          <p>Cloud Data Center Design, Development and Implementation, Operation Management, Cloud Infrastructure and Application Deployment.</p>
<Button>Read More <i className="fas fa-angle-right"></i></Button>
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>  
   
      </div>
     
    );
  }}
  export default SliderComponent;