import { Component, Fragment } from 'react';

class Unmounting extends Component {

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
    setTimeout(()=>{
      this.setState({
        count:2
      })
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
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

export default Unmounting;
