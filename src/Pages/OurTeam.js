import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';   
const OurTeam = () => {
    return (
        <React.Fragment>
            <Container className="team">
            <br></br>
               <h1 style={{textAlign:"center"}}>About</h1>
            <Row>
                <Col md={4} className="text-center"> 
                    <h1>Lal Vaghji</h1>
                    <h6>Chief Executive Officer</h6>
                    <p>Lal founded Ana-Data Consulting in 1993 and has over 25 years of industry experience. He has completed successful development and data warehouse projects for companies like IBM, Coopers and Lybrand, Pitney Bowes, AT&T, Cadbury Schweppes, Merrill Lynch, Nabisco, and Unilever. Lal obtained his BSc. in Information Systems from Sheffield Hallam University in UK and MBA from Sacred Heart University in Connecticut, USA

</p>
                </Col>
                <Col md={4} className="text-center"> 
                    <h1>Ravi Shankar</h1>
                    <h6>President</h6>
                    <p>Ravi joined Ana-Data Consulting in 1998 and has over 25 years of industry experience. Ravi has provided financial systems strategy and advisory to banks, hedge funds, and asset management firms ranging from capital markets to corporate governance platforms. Ravi obtained his B.Sc in Statistics from Madras University, India, and B.Tech in Computer Science and Technology from Hyderabad Central University, Hyderabad, India.

</p>
                </Col>
                <Col md={4} className="text-center"> 
                    <h1>Balaji Soundararajan</h1>
                    <h6>Technology Executive</h6>
                    <p>Technology Executive and change catalyst offering a proven track record of
enhancing IT systems to advance corporate goals and support business strategy within public and
private entities. Adept at planning and managing complex, multi-million dollar projects designed to
improve, enhance and fortify business processes and structure. Expert at maximizing ROI through
innovation, creativity and application of proven technology strategies. Offer solid ability to optimally
allocate human, physical and financial resources. Tactfully engage relevant stakeholders, senior
management and all levels of employees to carry out projects in accordance with requirements. Keep
abreast of current trends; presenter at various high profile industry conferences</p>
                </Col>
            </Row>
            </Container> 
            </React.Fragment>
    )
}

export default OurTeam
