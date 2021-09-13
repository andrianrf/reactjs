import './App.css';
import { Component, Fragment } from 'react';
import ApiPost from './class/ApiPost';

// npm install -g json-server
// json-server --watch db.json --port 3004
// docs : https://github.com/typicode/json-server

class App extends Component {

  render(){

    return (
      <Fragment>
        <h3>ApiPost</h3>
        <ApiPost />
      </Fragment>
    )
  }
}

export default App;
