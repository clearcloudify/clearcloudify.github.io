import React from 'react';
import Container from 'react-bootstrap/Container'; 
import CloudinfraBanner from '../images/cloud-infra.jpg';
const cloudmigration = () => {
    return (
        <React.Fragment>
             <div className='innerbanner'>
            <img src={CloudinfraBanner} alt="Cloud Native Applications"/>
            </div>
            <Container> 
            <p>A successful cloud migration involves an iterative process to assess, migrate, optimize, secure, and
manage workloads efficiently.
</p>
<p>Our cloud migration services help in reducing physical resource requirements, expenditures and
increase productivity for your organization. With proven methodologies and approaches, our services
will help you with hassle-free transformation from on premise to cloud migration and build suitable
solutions for your business needs. We provide an in-depth analysis and review of your organization’s objective, requirement focused assessment and assist in building a roadmap to support, rebuild and
re-architect applications.</p>
<p>Moving your IT workloads to Cloud requires a systematic strategy derived by validating efficient ways to
shift. This strategy depends on the complexity of your environment. When you step into moving the
application to the cloud, there are some important considerations that you need to make.</p>
<p>Whether your application runs on-premise or cloud, there is always a new challenge waiting for your
business to overcome. We are here to assist you all along your cloud journey in resolving such
challenges with our personalized consulting service and solutions. Our Cloud Advocates will help you in
reducing operational costs, increasing innovation and achieving your business objectives strategically.</p>
<span>Our migration strategies for moving applications to the cloud involves the following stages:</span>
<p><strong>Refactor / Re-Architect</strong> – We move an application and modify its architecture by taking full advantage of
cloud-native features to improve agility, performance, and scalability. This typically involves porting the
operating system and database.</p>
<p><strong>Replatform</strong> (lift and reshape) – We move an application to the cloud, and introduce some level of
optimization to take advantage of cloud capabilities.</p>
<p><strong>Repurchase</strong> (drop and shop) – We switch you to a different product, typically by moving from your
traditional license to a SaaS model.</p>
<p><strong>Rehost</strong> (lift and shift) – We move an application to the cloud without making any changes to take
advantage of cloud capabilities.</p>
<p><strong>Relocate</strong> (hypervisor-level lift and shift) – We move infrastructure to the cloud without purchasing new
hardware, rewriting applications, or modifying your existing operations.
</p>
<p><strong>Retain</strong> (revisit) – We keep applications in your source environment. These might include applications
that require major refactoring, and you want to postpone that work until a later time, and legacy
applications that you want to retain, because there’s no business justification for migrating them.</p>
<p>Retire – We decommission or remove your applications that are no longer needed in your source
environment.</p>
<p>As we commence the cloud migration journey together, it is critical to document the reason for
migration and what difference it makes to the business. To achieve this, we conduct a cloud readiness
assessment to document the complete state analysis and to create a standard migration plan. Our
assessment involves evaluation of current workloads, infrastructure and server configuration, security
and compliance concerns which aids in providing effective solutions for cloud migration support.</p>
<p>Having assessed and documented these details, we map them to their interdependencies in the
applications and thus, formulate a customized migration plan. Being a leading cloud migration partner,
we help businesses in a smooth transition from on premise to cloud or datacenter to cloud. Our Cloud
consulting services enable you to move your applications to the cloud for global reach, standardization
and acceleration.
</p>
</Container>
        </React.Fragment>
    )
}

export default cloudmigration
