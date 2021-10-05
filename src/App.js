import './App.css';
import { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Secured from './pages/Secured';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="container">
          npm install @react-keycloak/web keycloak-js --save
          <ul>
            <li>
              <Link to="/">public component</Link>
            </li>
            <li>
              <Link to="/secured">secured component</Link>
            </li>
          </ul>
          <Route exact path="/" component={Welcome} />
          <Route path="/secured" component={Secured} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
