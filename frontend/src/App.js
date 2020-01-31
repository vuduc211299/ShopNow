import React from 'react';
import NavBar from './components/Header/NavBar'
import {Router, Route, Switch} from 'react-router-dom'
import Home from './components/Pages/home/Home';
import Product from './components/Pages/product/Product';
import Cart from './components/Pages/cart/Cart';
import Login from './components/auth/Login';
import CheckOut from './components/Pages/checkout/CheckOut';
import history from './components/common/history'

function App() {
  return (
    <div className="App">
      
      <Router history={history}>
        <NavBar/>
        <Switch>
          <Route path='/product/:id' component={Product} />
          <Route path='/cart' component={Cart}/>
          <Route path='/login' component={Login}/>
          <Route path='/checkout' component={CheckOut}/>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
