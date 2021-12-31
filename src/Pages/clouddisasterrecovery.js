import React from 'react';
import Container from 'react-bootstrap/Container';  
import cloudstrategybanner from '../images/cloud-strategy.jpg';

const clouddisasterrecovery = () => {
    return (
        <React.Fragment>
            <div className='innerbanner'>
            <img src={cloudstrategybanner} alt="cloudstrategy"/>
            </div>
            <Container>
            <p>Disaster Recovery minimizes downtime and data loss with fast, reliable recovery of on-premises and
cloud-based applications using affordable storage, minimal compute, and point-in-time recovery.
Gartner defines the disaster recovery as a service (DRaaS) market as a productized service offering in which the provider manages server image and production data replication to the cloud, disaster
recovery runbook creation, automated server recovery within the cloud, automated server failback
from the cloud, and network element and functionality configuration, as needed. Source servers
supported must include a combination of both virtual and physical. To be considered DRaaS versus
other options that enable do-it-yourself recovery, all elements of the service must be included in the
service offering contract between the provider and customer, and offer a standardized SLA for recovery.
</p>
<p>Disaster Recovery is a subset of Business Continuity Planning. It begins with a business impact analysis
that defines two key metrics:</p>
<ul>
    <li>A <a href="https://wikipedia.org/wiki/Recovery_time_objective" target="_blank" rel="noopener noreferrer">recovery time objective</a> (RTO), which is the maximum acceptable length of time that your
application can be offline. This value is usually defined as part of a larger service level agreement
(SLA).</li>
<li>A <a href="https://wikipedia.org/wiki/Recovery_point_objective" target="_blank" rel="noopener noreferrer">recovery point objective</a> (RPO), which is the maximum acceptable length of time during which
data might be lost from your application due to a major incident. This metric varies based on the
ways that the data is used. This metric describes only the length of time; it doesn't address the
amount or quality of the data that's lost.
</li>
</ul>
<span>If your RTO and RPO values are smaller, you will have greater resiliency from an interruption.</span>
<strong>Disaster Recovery Plan - Scope</strong>
<ul>
    <li><strong>Programs and Data</strong> - Programs include the software that runs an organization’s operation, Data
include customer accounts and business relationship records.</li>
<li><strong>Dependencies</strong> - Identify the software dependencies for seamless interoperability</li>
<li><strong>Personnel</strong> - Identify the key personnel who will be involved in restoring the systems and data.</li>
<li><strong>Compliance</strong> - Ensure regulatory compliance and security before resuming operations with the
recovered data.</li>
</ul>
<span>Cloud-based Data Protection services offer:</span>
<ul>
    <li><i>Backup-as-a-Service</i> - Backup and restore the contracted data by cloud service providers.</li>
    <li><i>Recovery-as-a-Service</i> - An extension of BaaS where applications are also restored from the cloud
in addition to the data.</li>
    <li><i>Disaster Recovery-as-a-Service</i> - An extension of RaaS that includes cloud-based failover, in
addition to backup and recovery services.</li> 
    </ul>
    <strong>Benefits of Disaster Recovery Service</strong>
    <ul>
        <li>Reliability, flexibility and high performance</li>
        <li>Effective addressing of mobility and portability challenges</li>
        <li>Consumption of much lesser operational resources</li>
        <li>Rapid and immediate recovery of data in the event of a disaster</li>
        <li>Quick restoration of normal operations</li>
        <li>Significant savings in terms of software licenses and hardware</li> 
    </ul>
    <h6><strong>Disaster Recovery Options</strong></h6>
    <ul>
        <li><u>Self-Service</u>- Basic option, where an organization engages with a DR service provider only for
purchasing a public/private cloud for data storage and is responsible for managing the data protection
processes and recovering data. Self-service is more suited for large organizations with a separate team
of DR engineers.
</li>
<li><u>Assisted Service</u> - Organizations assemble and manage the DR plan with the option of seeking the DR
service provider’s assistance. The assisted service is ideal for organizations looking to leverage the
flexibility option of the cloud. As the provider is not involved in managing the process end-to-end, they
do not guarantee a fixed recovery time as part of the Service Level Agreement (SLA).</li>
<li><u>Managed Service</u> - The DR service provider is responsible for the implementation and management of
data protection and recovery. Managed service involves comprehensive SLAs with organizations entitled to receive reimbursements for incomplete objectives. Managed service is generally priced much
higher than the assisted and self-service.</li>
    </ul>
    <strong>Why do you need Cloud-based Disaster Recovery</strong>
    <p><u>Reduced Downtime</u> – Cloud-based solutions offer your organization the power to run off the cloud or
restore your crucial data and systems to any location. They help you get these systems back online
much quicker during an IT disaster, minimizing the manual processes of traditional recovery methods</p>
<p><u>Reliable</u> – Cloud-based solutions allow for frequent and non-disruptive testing of IT disaster recovery
efforts. This allows organizations to test their recovery point objective and recovery time objective
highly accurately, which strengthens your disaster recovery plan</p>
<p><u>Efficient</u> – You can quickly deploy cloud-based disaster recovery to all locations across an organization.
Our cloud architecture works well with your broader business continuity plan, allowing users remote
access to necessary systems.</p>
<p><u>Ease of Deployment</u> – With cloud-based solutions, entities can leverage provider expertise and
specialized knowledge. They can get started without significant investments in hardware, software, or a
secondary site and without much training or adding headcount.</p>
<p><u>Scalable</u> – Cloud-based services can be easily scaled up or down depending on business requirements.
Payment for service will only be for actual use and the business need not keep redundant capacity as
standby since it has a s cost attached to it. Even if the service requirements are scaled up, overall it is a
much cheaper option compared to others.
</p>
<p><u>Cost Effective</u> – Organizations using cloud-based disaster recovery solutions can take advantage of the
common pay-as-you-grow model, aligning costs with the size and complexity of your IT disaster
recovery needs. This also enables shifting costs from non-recurring (capital expense) to recurring
(operational).
</p>
<p>Backup and disaster recovery services are a great way to start a managed services conversation with
new prospects, and it’s a tremendous source of recurring revenue. Lower price points, flexible contract terms, and scalability allow you to protect your applications and data with controlled, predictable
investments while improving business resiliency.
</p>
<p>We define and demonstrate a detailed disaster recovery plan that can be updated periodically. We offer
a flexible pricing plan for disaster recovery service based on the scale of your usage. Our technical
support team will help you achieve the RTO and RPO as per the Service Level Agreement (SLA)</p>
            </Container> 
            </React.Fragment>
    )
}

export default clouddisasterrecovery
