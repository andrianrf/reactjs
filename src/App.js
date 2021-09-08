import './App.css';
import React, { Component } from 'react';
import TrolleyClass from './pages/TrolleyClass';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <React.Fragment>
        <h1>ComponentClass</h1>
        <TrolleyClass />
      </React.Fragment>
    )
  }
}

export default App;
