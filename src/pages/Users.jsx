import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import User from './User';

class Users extends Component {

  render(){
    return (
      <BrowserRouter>
      <h2> Halaman Users </h2>
      <ul>
        <li> <Link to='/user/andrian'>Andrian</Link> </li>
        <li> <Link to='/user/ramadhan'>Ramadhan</Link> </li>
        <li> <Link to='/user/febriana'>Febriana</Link> </li>
      </ul>

      
      <Switch>
            <Route path='/user/:name' exact component={User} />
      </Switch>
      </BrowserRouter>
      
    )
  }
}

export default Users;
