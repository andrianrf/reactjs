import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';

function NotMatch() {
  return <h2> Halaman Tidak Ditemukan </h2>  
}

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/user'> Users </Link> </li>
          </nav>

          <main>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/user' component={Users} />
            <Route path='/user/:name' exact component={User} />
            <Route component={NotMatch} />
            </Switch>
          </main>
        </div>      
      </BrowserRouter>
    )
  }
}

export default App;
