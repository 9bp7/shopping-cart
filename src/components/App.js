import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';

function App() {
  let [cart, setCart] = useState([]);

  const addToCart = (obj) => {
    setCart([...cart, obj]);
  }

  const removeFromCart = (obj) => {
    let updatedCart = cart;
    let foundItem = false;
    updatedCart.forEach((item, index) => {
      if(item === obj && !foundItem) {
        updatedCart.splice(index, 1);
        foundItem = true;
      }
    })
    setCart([...updatedCart]);
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav cart={cart} />
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:index" render={(props) => <ProductDetail addToCart={addToCart} {...props} />}/>
          <Route exact path="/cart">
            <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
          </Route>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
