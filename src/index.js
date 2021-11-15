import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import contact  from '../src/Pages/Contact'; 
import Products  from '../src/Pages/Products';
import Services  from '../src/Pages/Services';
import About from '../src/Pages/About'; 
import Events  from '../src/Pages/Events';
import Partners from '../src/Pages/Partners';
import Blog  from '../src/Pages/Blog';

import NotFoundPage  from '../src/Pages/NotFoundPage'; 
import Header  from '../src/Components/Header'; 
import Footer  from '../src/Components/Footer';

ReactDOM.render(
  <React.StrictMode>  
    <Header /> 
    <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/events" component={Events}/>
      <Route exact path="/partners" component={Partners}/>
      <Route exact path="/blog" component={Blog}/>
      <Route path="*" component={NotFoundPage} /> 
    </Switch>
  </Router>
  <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
