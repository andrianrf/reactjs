import './App.css';
import React, { Component } from 'react';
import ComponentJs from './js/ComponentJs';
import ComponentJsx from './jsx/ComponentJsx';
import ComponentClass from './class/ComponentClass.jsx';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <React.Fragment>
        <h1>ComponentJS</h1>
        <ComponentJs name="Andrian" />
        <ComponentJs name="Ramadhan" />
        <ComponentJs name="Febriana" />
        <ComponentJs />
        <h1>ComponentJSX</h1>
        <ComponentJsx name="Andrian" />
        <ComponentJsx name="Ramadhan" />
        <ComponentJsx name="Febriana" />
        <ComponentJsx />
        <h1>ComponentClass</h1>
        <ComponentClass name="Andrian" />
        <ComponentClass name="Ramadhan" />
        <ComponentClass name="Febriana" />
        <ComponentClass />
      </React.Fragment>
    )
  }
}

export default App;
