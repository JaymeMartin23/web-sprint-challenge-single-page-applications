import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import OrderForm from './OrderForm';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/pizza" element={ <OrderForm />} />
      </Routes>
    </div>
  );
}

export default App;
