import React from 'react';
import NavBar from './components/Header/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Pages/home/Home';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
