import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
const OurTeam = () => {
    const name = 'About ClearCloudify'
    return (
        <React.Fragment>
            <div className="Productsection">
                <Container>
                    <h1 className="text-center" id="demo">{name}</h1>
                    <p className="text-justify">
                        Clear Cloudify is a Technology Advisory of Ana-Data Consulting Inc., We deliver solid and widespread advocacy to enable your Digital Modernization journey. Our team of Cloud Advocates and Engineers will provide Technology Leadership, Solutions Consulting, Best Practices, Research, Implementation, Support and Training to seamlessly move your IT workloads to Cloud infrastructure.
                        <br/><br/>We accelerate your Cloud Adoption journey by:
                        <br/><br/>• Driving momentum across the organization
                        <br/>• Developing reusable frameworks for cloud governance
                        <br/>• Managing cloud knowledge and learning
                        <br/>• Overseeing cloud usage and plans for scale
                        <br/>• Aligning cloud offerings to the larger organizational strategy
                        <br/><br/>Our Cloud Center of Excellence delivers Reference Architectures, Cloud Migration Roadmap, Cloud Adoption Playbook, Implementation Plan, Risk & Compliance, Detailed Documentation, Cost Estimation Template, Sandbox and Labs, Case Studies, Cloud Engineering Blogs.
                        Our Multi-Disciplinary team will drive your cloud adoption efforts across the organization, including developing cloud best practices, mobilizing resources, establishing migration timelines, and leading the organization through large-scale transformations.
                        We empower your organization to balance speed and stability in the pursuit of your Digital Modernization journey.
                        <br/><br/>We are headquartered in Jersey City, New Jersey and have been providing technology solutions to our clients since 1993. We exhibit agility to build long-lasting value in every direction for our clients, people and communities.
                    </p>
                </Container>
            </div>
            <Container className="team">
            <br></br>
               <h1 style={{textAlign:"center"}}>Our Leadership</h1>
            <Row>
                <Col md={4}>
                    <h1 className="text-center">Lal Vaghji</h1>
                    <h6 className="text-center">Founder & CEO</h6>
                    <p className="text-justify">Lal leads the business and growth of ClearCloudify. Lal has been heading Ana-Data Consulting Inc., for 28 years serving superior technology solutions to clients globally across multiple business domains. He is an accomplished entrepreneur with proven track record of identifying new opportunities and sustaining extraordinary business growth.</p>
                </Col>
                <Col md={4} className="text-justify">
                    <h1>Ravi Shankar</h1>
                    <h6>President</h6>
                    <p>Ravi leads the strategy and operations of ClearCloudify. Ravi has been driving the business operations and strategy of Ana-Data Consulting Inc., for 23 years predominantly serving financial clients across geographies. He has championed Technology Solutions Consulting, Partnership Establishment, and Employee Engagement in all dimensions to elevate organizational performance globally.</p>
                </Col>
                <Col md={4} className="text-justify">
                    <h1>Balaji Soundararajan</h1>
                    <h6>Technology Executive</h6>
                    <p>Balaji leads the technology, business development and execution of ClearCloudify. </p>
                </Col>
            </Row>
            </Container> 
            </React.Fragment>
    )
}

export default OurTeam
