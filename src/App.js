import './App.css';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { reduxStore } from './config/redux/store/reduxStore';
import Register from './pages/firebase-auth/Register/Register';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/firebase-auth/Login/Login';

// npm install firebase --save

class App extends Component {

  render(){
    return (
      <Provider store={reduxStore}>
        <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/register" >
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
