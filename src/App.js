import './App.css';
import { Component } from 'react';
import ComponentJs from './js/ComponentJs';
import ComponentJsx from './jsx/ComponentJsx';
import ComponentClass from './class/ComponentClass.jsx';
import Hook from './hook/hook';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div>
        <Hook />
      </div>
    )
  }
}

export default App;
