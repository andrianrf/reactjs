import { Component, Fragment } from 'react';

class LifeCycle extends Component {

  // reference : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  constructor(props){
    super(props);
    this.state = {
      count: 1
    }
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps');
    return null;
  }
  
  changeCount = () => {
      this.setState({
          count: this.state.count+1
      })
  }

  render(){
    console.log('render');
    return (
      <Fragment>
        Fragment {this.state.count}
        <button onClick={this.changeCount}>+</button>
      </Fragment>
    )
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.group('shouldComponentUpdate');
    console.log('nextState: ', nextState);
    console.log('this state: ', this.state)
    console.groupEnd();
    if(nextState.count>=4){
        return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
}

export default LifeCycle;
