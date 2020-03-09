import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import List from './List';
import NavbarPage from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Login';
import MyAccount from './MyAccount';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/NavBar' component={NavbarPage}/>
          <Route path='/Login' component={LoginPage}/>
          <Route path='/MyAccount' component={MyAccount}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
