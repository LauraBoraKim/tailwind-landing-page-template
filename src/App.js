import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';

function App() {

  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  const countCartItems = (cartItems) => {
    let cnt = 0
    cartItems.map(item => {
      cnt += item.quantity
    })
    return cnt
  }

  return (
    <Router>
      <Nav cntOfItems={countCartItems(cartItems)}/>
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items}  cartItems={cartItems} setCartItems={setCartItems}/>
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart cartItems={cartItems} items={items} setCartItems={setCartItems}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
