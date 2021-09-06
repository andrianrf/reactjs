import { Fragment } from "react";
import { Component } from "react";

class ApiGetV2 extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
        isLoading: true
      }
    }
  
    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(Response => Response.json())
      .then(data => this.setState(
        {posts:data, isLoading:false}
        ))
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

export default ApiGetV2;