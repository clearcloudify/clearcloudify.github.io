import React  from 'react';   
import './App.css';     
import Clients  from '../src/Components/Clients' 
 import Blog  from '../src/Components/Blog';
import SliderComponent from '../src/Components/SliderComponent';
import Services  from '../src/Components/Services';
import Products  from '../src/Components/Products';
import ServicesList from '../src/Components/ServicesList';
import Testimonial from '../src/Components/Testimonial';
import Techstacks  from '../src/Components/Techstacks';

function App() {
  return (
    <div className="App"> 
      <SliderComponent/>
      <Products/>
      <Services/> 
      <ServicesList/> 
      <Clients/>
      <Testimonial/>
      <Techstacks/>
      <Blog/>    
    </div>
  );
}

export default App;
