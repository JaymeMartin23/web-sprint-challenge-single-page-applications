import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Welcome to our Pizza Shop!</h1>
      <Link id="order-pizza" to="/pizza">Order Pizza</Link>
    </div>
  );
}

export default Home;

