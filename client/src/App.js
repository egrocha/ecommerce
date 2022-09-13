import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Home.js';
import Item from './Item.js';
import Checkout from './Checkout.js';

export default function BasicExample() {
  return (
    <Router>
      <div>
				<h2>ECommerce</h2>
				<div>
					<Link to='/'><button type='button'>Home</button></Link>&nbsp;
					<Link to='/checkout'><button type='button'>Checkout</button></Link>
				</div>
				<hr />

        <Routes>
          <Route path='/' element={<Home />} />
					<Route path='/item/:id' element={<Item />} />
					<Route path ='/checkout' element={<Checkout/>} />
        </Routes>
      </div>
    </Router>
  );
}
