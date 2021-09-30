import './App.css';
import { Component } from 'react';
import Register from './pages/firebase-auth/Register';
import { Provider } from 'react-redux';
import { reduxStore } from './config/redux/store/reduxStore';

// npm install firebase --save

class App extends Component {

  render(){
    return (
      <Provider store={reduxStore}>
        Register
        <Register />
      </Provider>
    )
  }
}

export default App;
