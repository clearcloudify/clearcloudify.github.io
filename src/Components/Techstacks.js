import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Frontendtech from '../images/frontend-tech.png';
import Backendtech from '../images/backend-tech.png'; 
import DatabaseTech from '../images/databasetech.png';
import CloudTech from '../images/cloudtech.png';
import DevOpsTech from '../images/devopstech.png';

class Frontend extends React.Component {
    render() { 
    return (
    <div>
            <img src={Frontendtech} alt="Frontend"/>
        </div>
    ) 
     }  
}; 

class Backend extends React.Component {
    render() { 
    return (
        <div>
                <img src={Backendtech} alt="Backend"/>
            </div>
        ) 
     }  
}; 
class Databases extends React.Component {
    render() { 
    return (
        <div>
                <img src={DatabaseTech} alt="Database"/>
            </div>
        )  
     }  
}; 
class Cloud extends React.Component {
    render() { 
    return (
        <div>
                <img src={CloudTech} alt="Cloud"/>
            </div>
        )  
     }  
};  
class DevOps extends React.Component {
    render() { 
    return (
        <div>
                <img src={DevOpsTech} alt="DevOpsTech"/>
            </div>
        )   
     }  
};  

class Techstacks extends Component { 
    render() {
        const name = "Tech Stacks";
        return(
            <div className="techstacksctrls">
<h1 className="text-center">{name}</h1>
<Tabs defaultActiveKey="frontend" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="frontend" title="Frontend">
    <Frontend />
  </Tab>
  <Tab eventKey="backend" title="Backend">
  <Backend />
  </Tab>
  <Tab eventKey="databases" title="Databases" >
  <Databases />
  </Tab>
  <Tab eventKey="cloud" title="Cloud" >
  <Cloud />
  </Tab>
  <Tab eventKey="devops" title="DevOps" >
  <DevOps />
  </Tab>
</Tabs>
            </div>
        )
    }  
}

export default Techstacks;



  

