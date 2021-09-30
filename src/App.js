import './App.css';
import { Component } from 'react';
import Register from './pages/firebase-auth/Register';

// npm install firebase --save

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div>
        Register
        <Register />
      </div>
    )
  }
}

export default App;
