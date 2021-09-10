import './App.css';
import React, { Component } from 'react';
import TrolleyClass from './pages/TrolleyClass';
import GlobalProvider from './context/Context';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <h1>ComponentClass</h1>
        <TrolleyClass />
      </React.Fragment>
    )
  }
}

export default GlobalProvider(App);
