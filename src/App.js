import './App.css';
import React, { Component } from 'react';
import ComponentJs from './js/ComponentJs';
import ComponentJsx from './jsx/ComponentJsx';
import ComponentClass from './class/ComponentClass.jsx';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return <h2> Halaman Home </h2>
}

function Users() {
  return (
  <React.Fragment>
  <h2> Halaman Users </h2>
  <ul>
    <li> <Link to='/user/andrian'>Andrian</Link> </li>
    <li> <Link to='/user/ramadhan'>Ramadhan</Link> </li>
    <li> <Link to='/user/febriana'>Febriana</Link> </li>
  </ul>
  </React.Fragment>
  )  
}

function User({match}) {

  return <h2> Ini halaman {match.params.name} </h2>
  
}

function NotMatch() {
  return <h2> Halaman Tidak Ditemukan </h2>  
}

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <h1>ComponentJS</h1>
        <ComponentJs name="Andrian" no="1" />
        <ComponentJs name="Ramadhan" no="2" />
        <ComponentJs name="Febriana" no="3" />
        <ComponentJs />
        <h1>ComponentJSX</h1>
        <ComponentJsx name="Andrian" no="1" />
        <ComponentJsx name="Ramadhan" no="2" />
        <ComponentJsx name="Febriana" no="3" />
        <ComponentJsx />
        <h1>ComponentClass</h1>
        <ComponentClass name="Andrian" no="1" />
        <ComponentClass name="Ramadhan" no="2" />
        <ComponentClass name="Febriana" no="3" />
        <ComponentClass />
        <div>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/users'> Users </Link> </li>
          </nav>

          <main>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={Users} />
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
