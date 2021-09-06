import './App.css';
import { Component, Fragment } from 'react';
import LifeCycle from './lifecycle/LifeCycle';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showComponent:true
    }
  }
  
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        showComponent:false
      })
    }, 30*60*1000);
  }

  render(){
    return (
      <Fragment>
      {this.state.showComponent?
        <LifeCycle/>: null
      }
      </Fragment>
    )
  }
}

export default App;
