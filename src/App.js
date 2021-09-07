import './App.css';
import { Component, Fragment } from 'react';
import ApiDelete from './class/ApiDelete';

// npm install -g json-server
// json-server --watch db.json --port 3004
// docs : https://github.com/typicode/json-server

class App extends Component {

  render(){

    return (
      <Fragment>
        <h3>ApiDelete</h3>
        <ApiDelete />
      </Fragment>
    )
  }
}

export default App;
