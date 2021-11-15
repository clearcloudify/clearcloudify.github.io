import React, { Component } from 'react';  

export class Clients extends Component {

  render() {
    const name = "Our Clients"
    return( 
        <div id="clients"> 
        <h1 className="text-center">{name}</h1>
            <div className="adc-logo-strip"></div>
        </div>
    );
  }
}
export default Clients;