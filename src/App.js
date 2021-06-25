import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link, userRouteMatch, userParmas } from "react-router-dom";
import inicio from './componentes/Inicio';
import mesero from './componentes/Mesero';
import cocina from './componentes/Cocina';




function App() {
  return (
    <Router>   
      <Link to="/mesero">
        Mesero
      </Link>
      <Link to="/cocina">
        Cocina
      </Link>
      <Switch>
      <Route exact path="/" component={inicio}/>
              
        <Route path="/mesero" component={mesero}/>
        
        <Route path="/cocina" component={cocina}/>        
      </Switch>
    
    </Router>
  );
}

export default App;
