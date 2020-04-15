import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Movimientos from './Vistas/Movimientos';
import Compras from './Vistas/Compras';
import Estado from './Vistas/Estado';

import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

export default function App() {
  return(
    <Router>
        <Header />
        <LoginRoutes />
        <Footer />
    </Router>
  );  
}

function LoginRoutes() {
  return(
    <Switch>
      <Route 
        path='/estado'
        render={props => (
          <Estado {...props} />
        )}
      />  
      <Route 
        path='/compras'
        render={props => (
          <Compras {...props} />
        )}
      />  
      <Route 
        path='/'
        render={props => (
          <Movimientos {...props} />
        )}
        default
      />
    </Switch>
  );
}
