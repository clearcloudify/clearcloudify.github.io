import React, { Component } from 'react'; 

import { InlineWidget } from "react-calendly";
class Events extends Component { 
    render() {
      return(
          <div>
               <br></br>
               <h1 style={{textAlign:"center"}}>Events</h1>
               <InlineWidget url="https://calendly.com/clearmegha/experiment1et" />
               <br></br> 
          </div>
      )
    }}
export default Events
