import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';


class PageNotFound extends Component { 
  render() {
    return(
        <div className="pagenotfound">  
            <h1 style={{textAlign:"center"}}>Coming Soon . . . </h1>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>  
        </div>
    );
  }
}

export default PageNotFound;