import { Component, Fragment } from 'react';

class Mounting extends Component {

  constructor(props){
    super(props);
    this.state = {
      count: 1
    }
    console.log('=== Mounting ===');
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps');
    return null;
  }

  render(){
    console.log('render');
    return (
      <Fragment>
        Fragment {this.state.count}
      </Fragment>
    )
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
}

export default Mounting;
