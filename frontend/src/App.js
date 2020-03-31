import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import Home from './components/Pages/home/Home';
import Product from './components/Pages/product/Product';
import Cart from './components/Pages/cart/Cart';
import Login from './components/auth/Login';
import CheckOut from './components/Pages/checkout/CheckOut';
import history from './components/common/history'
import CategoryPage from './components/Pages/home/category/categoryPage';
import UserInfo from './components/Pages/userInfo/UserInfo';
import NotFound from './components/Pages/NotFound'
import ScrollToTop from './components/common/ScrollToTop'
import Shop from './components/Shop/Shop'
import Orders from './components/Shop/Orders';
import AddProduct from './components/Shop/product/AddProduct'
import MyProduct from './components/Shop/product/MyProduct';
import { PrivateRoute } from './components/common/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <ScrollToTop/>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/cart' component={Cart}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/checkout' component={CheckOut}/>
          <Route path='/product/:id' component={Product} />
          <Route path='/category/:id' component={CategoryPage}/>
          <PrivateRoute path='/user/profile' component={UserInfo}/>
          <PrivateRoute exact path='/shop' component={Shop}/>
          <PrivateRoute path='/shop/order' component={Orders}/>
          <PrivateRoute path='/shop/product/add' component={AddProduct}/>
          <PrivateRoute path='/shop/product' component={MyProduct}/>
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
