import React from 'react';
import NavBar from './components/Header/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Pages/home/Home';
import Product from './components/Pages/product/Product';
import Cart from './components/Pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/product/:id' component={Product} />
          <Route path='/cart' component={Cart}/>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
