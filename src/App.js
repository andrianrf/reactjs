import './App.css';
import { Component, Fragment } from 'react';
import ApiGet from './class/ApiGet';
import ApiGetV2 from './class/ApiGetV2';
import ApiGetV3 from './class/ApiGetV3';


class App extends Component {

  render(){

    return (
      <Fragment>
        <h3>ApiGet V1</h3>
        <ApiGet />
        <h3>ApiGet V2</h3>
        <ApiGetV2 />
        <h3>ApiGet V3</h3>
        <ApiGetV3 />
      </Fragment>
    )
  }
}

export default App;
