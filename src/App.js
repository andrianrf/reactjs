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
        <ComponentJs name="Andrian" no="1" />
        <ComponentJs name="Ramadhan" no="2" />
        <ComponentJs name="Febriana" no="3" />
        <ComponentJs />
        <h1>ComponentJSX</h1>
        <ComponentJsx name="Andrian" no="1" />
        <ComponentJsx name="Ramadhan" no="2" />
        <ComponentJsx name="Febriana" no="3" />
        <ComponentJsx />
        <h1>ComponentClass</h1>
        <ComponentClass name="Andrian" no="1" />
        <ComponentClass name="Ramadhan" no="2" />
        <ComponentClass name="Febriana" no="3" />
        <ComponentClass />
      </React.Fragment>
    )
  }
}

export default App;
