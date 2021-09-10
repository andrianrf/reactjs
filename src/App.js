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
    if(action.type === 'PLUS_ORDER'){
      return this.setState({
        totalOrder: this.state.totalOrder + 1
      })
    }
    if(action.type === 'MINUS_ORDER'){
      if(this.state.totalOrder>0){
          return this.setState({
            totalOrder: this.state.totalOrder - 1
          })
      }
    }
  }

  render(){
    return (
      <Provider value={
        {
          state: this.state,
          dispatch: this.dispatch
        }
      }>
      <React.Fragment>
        <h1>ComponentClass</h1>
        <TrolleyClass />
      </React.Fragment>
      </Provider>
    )
  }
}

export default App;
