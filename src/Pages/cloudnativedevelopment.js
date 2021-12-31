import React from 'react';
import Container from 'react-bootstrap/Container';  
import CloudnativeBanner from '../images/cloud-native.jpg';

const cloudnativedevelopment = () => {
    return ( 
        <React.Fragment>
             <div className='innerbanner'>
            <img src={CloudnativeBanner} alt="Cloud Native Applications"/>
            </div>
            <Container> 
            <p>Cloud Native Applications are built from the ground up — optimized for cloud scale and performance.
They are based on microservices architectures, utilize managed services, and leverage the benefits of
continuous delivery to achieve reliability and faster time to market.
</p>
<strong>Cloud-First</strong>
<p>We build your cloud-native apps with fully managed services, seamlessly integrated development tools,
and built-in, enterprise-grade security offered by the Cloud platform provider. Use the tools and
technologies of your choice, while implementing a microservices-based, cloud-native architecture that
makes it easier to develop and scale your applications.
</p>
<strong>Select the Right Tools</strong>
<p>We innovate on an open platform using the best tools for solving your business challenges including
SDKs, and development tools from all Cloud platform providers. The Cloud solution offerings give you
the flexibility to implement independent services with a framework specifically designed for distributed
systems, using containers, or with a serverless approach.</p>
<strong>Productive Application Lifecycle</strong>
<p>We execute efficiently through an end-to-end development experience — coding, debugging,
deployment, and monitoring and management — with integrated tools and DevOps. Establish
automated continuous integration and continuous delivery (CI/CD) pipelines to deliver new features
faster — while maintaining uptime and high performance.</p>
<strong>Build Secure, and Resilient Apps</strong>
<p>We isolate the impact of faults, security incidents, and upgrades using microservices, containers, and
serverless functions to build your applications in Cloud.</p>
<p>How do we enable your Cloud Native journey ?</p>
<p><strong>Serverless Deployment</strong> - Build self-healing, auto-scaling, applications, unchained from the limitations
of servers. Serverless architectures offer the highest efficiency and cost benefits of the cloud by pushing
nearly all infrastructure and software management to the platform.</p>
<p><strong>Containerization</strong> - When serverless isn’t an option, many prefer containers for deploying modern,
complex, distributed applications. Containers often require minimal changes to the application, making
them the perfect evolutionary step when significant refactoring isn’t appropriate. </p>
<p><strong>Replatforming</strong> - Incrementally modernize your application by adopting managed platform services as
drop-in replacements for databases, messaging, API management, logging, monitoring, alerting, and
telemetry. </p>
<p>We will enable our clients with a range of services based on their readiness to adopt a seamless digital
modernization roadmap with full confidence.</p>
</Container>
        </React.Fragment>
    )
}
export default cloudnativedevelopment;