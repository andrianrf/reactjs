import './App.css';
import { Component, Fragment } from 'react';
import ApiGet from './class/ApiGet';

// npm install -g json-server
// json-server --watch db.json --port 3004
// docs : https://github.com/typicode/json-server

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
