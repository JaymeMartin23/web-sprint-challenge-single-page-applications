import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import OrderForm from './OrderForm';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={OrderForm} />
      </Switch>
    </div>
  );
}

export default App;
