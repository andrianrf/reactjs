import './App.css';
import { Component, Fragment } from 'react';
import ApiGet from './class/ApiGet';

class App extends Component {

  render(){

    return (
      <Fragment>
        <h3>ApiGet</h3>
        <ApiGet />
      </Fragment>
    )
  }
}

export default App;
