import { Fragment } from "react";
import { Component } from "react";
//npm install axios
import axios from 'axios';


class ApiGetV3 extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
        isLoading: true
      }
    }
  
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
          this.setState(
        {posts:res.data, isLoading:false}
          )
        });
    }

    render(){
    
        if(this.state.isLoading){
          return <p>Loading...</p>
        }

        return (
        
      <Fragment>
      <ul>
        { this.state.posts.map((post) =>
        <li key={post.id}> {post.title} </li>
        ) }
      </ul>
    </Fragment>
        );
    }
}

export default ApiGetV3;