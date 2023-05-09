import React, { useState } from 'react';

import './index.css';

function OrderForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);

    if (event.target.value.length < 2) {
      setNameError('name must be at least 2 characters');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit form data and return database record
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" type="text" value={name} onChange={handleNameChange} />
        {nameError && <div className="error">{nameError}</div>}
        
        <label htmlFor="size-dropdown">Pizza Size:</label>
        <select id="size-dropdown">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <label htmlFor="topping1">Toppings:</label>
        <input id="topping1" type="checkbox" />
        <label htmlFor="topping2">Toppings:</label>
        <input id="topping2" type="checkbox" />
        <label htmlFor="topping3">Toppings:</label>
        <input id="topping3" type="checkbox" />
        <label htmlFor="topping4">Toppings:</label>
        <input id="topping4" type="checkbox" />
        <label htmlFor="special-text">Special Instructions:</label>
        <input id="special-text" type="text" />
        
        <button id="order-button" type="submit">Add to Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
