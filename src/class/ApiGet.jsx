import { Fragment } from "react";
import { Component } from "react";

class ApiGet extends Component {
    constructor(props){
      super(props);
      this.state = {
        items: [],
        isLoading: true
      }
    }
  
    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(data => this.setState({items:data, isLoading:false}))
    }

    render(){

        const { items, isLoading } = this.state;
    
        if(isLoading){
          return <p>Loading...</p>
        }

        return (
        
      <Fragment>
      <ul>
        { items.map((item, index) =>
        <li key={index}> {item.name} </li>
        ) }
      </ul>
    </Fragment>
        );
    }
}

export default ApiGet;