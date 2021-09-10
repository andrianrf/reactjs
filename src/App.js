import './App.css';
import React, { Component, createContext } from 'react';
import TrolleyClass from './pages/TrolleyClass';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class App extends Component {
  state = {
    totalOrder: 0
  }

  dispatch = (action) => {
    
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
