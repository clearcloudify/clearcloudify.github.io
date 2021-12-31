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
import OurTeam from '../src/Pages/OurTeam';
import CloudStrategy from '../src/Pages/cloudstrategy';
import CloudMigration from '../src/Pages/cloudmigration';
import NotFoundPage  from '../src/Pages/NotFoundPage'; 
import Header  from '../src/Components/Header'; 
import Footer  from '../src/Components/Footer';
import CloudMonitoring from '../src/Pages/cloudmonitoring';
import CloudSecurity from '../src/Pages/cloudsecurity';
import CloudNativeDevelopment from '../src/Pages/cloudnativedevelopment';
import CloudModernization from '../src/Pages/cloudmodernization';
import CloudDisaster from '../src/Pages/clouddisasterrecovery';
import CloudinfraManagement from '../src/Pages/cloudinframanagement';

ReactDOM.render(
  <React.StrictMode>   
    <Router>
    <Header /> 
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cloud-strategy" component={CloudStrategy} />
      <Route exact path="/cloud-migration" component={CloudMigration}/>
      <Route exact path="/cloud-monitoring" component={CloudMonitoring}/>
      <Route exact path="/cloud-security" component={CloudSecurity}/>
      <Route exact path="/cloud-native-development" component={CloudNativeDevelopment}/>
      <Route exact path="/cloud-modernization" component={CloudModernization}/>
      <Route exact path="/cloud-disaster-recovery" component={CloudDisaster}/>
      <Route exact path="/cloud-infra-management" component={CloudinfraManagement}/>
      <Route exact path="/services" component={Services} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/events" component={Events}/>
      <Route exact path="/partners" component={Partners}/>
      <Route exact path="/ourteam" component={OurTeam}/>
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
