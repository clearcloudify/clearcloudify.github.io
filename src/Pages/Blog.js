import React, { Component } from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Migration from '../images/migration.jpg';
import Cloudsec from '../images/cloudsec.jpg';
import Innovation from '../images/innovation.jpg'; 

class Blog extends Component { 
    render() {
      const name = "Blog";
      return(
        <div> 
        <div className="insights" id="Blog">   
			<Container>
			<Row>
		<Col md={12}>
		<h1 className="text-center">{name}</h1> 
		</Col>
		</Row>
				<Row>
					<Col md={4}>
					<div className="insightcard">
					<a href="/" className="inner">
      <figure><img src={Migration} className="img-responsive" alt="Blog Images"/></figure>
      <article>
	   <ul>
          <li className="first last"> 9:10 pm November 20th, 2019</li>
        </ul>
         <h3>5 reasons why AWS is best</h3> 
		  <p>Amazon Web Services - AWS has been guarding its ground of providing a cross functional, resource...</p> 
		  
      </article>
      </a>
	  <a href="/" className="readmoreblog">Read More  <i className="fas fa-angle-right"></i></a>
				</div>
					</Col>
					<Col md={4}>
					<div className="insightcard">
					 <a href="/" className="inner">
       <figure><img src={Cloudsec} className="img-responsive" alt="Blog Images"/></figure>
      <article>
	   <ul>
          <li className="first last"> 3:31 pm July 25th, 2019</li>
        </ul>
         <h3> Web and Mobile App</h3> 
		  <p>
As a WordPress developer, whenever you build a new theme, plugin or even if you are testing out...</p>
      
      </article>
      </a>
	   <a href="/" className="readmoreblog">Read More  <i className="fas fa-angle-right"></i></a>
				</div>
					</Col>
					<Col md={4}>
					<div className="insightcard">
					<a  href="/" className="inner">
      <figure><img src={Innovation} className="img-responsive" alt="Blog Images"/></figure>
      <article>
	   <ul>
          <li className="first last"> 10:44 am August 15th, 2018</li>
        </ul>
	 <h3> Data Center Migration</h3> 
		  <p>As a WordPress developer, whenever you build a new theme, plugin or even if you are testing out new...</p>
       
      </article>
      </a>
	  <a href="/" className="readmoreblog">Read More  <i className="fas fa-angle-right"></i></a>
				</div>
					</Col>
				</Row>
			</Container> </div></div>
      )
    }}
export default Blog
