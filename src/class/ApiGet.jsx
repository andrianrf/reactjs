import { Fragment } from "react";
import { Component } from "react";
import ApiService from "../services/ApiService";

class ApiGet extends Component {
    state = {
      posts: [],
      comments: [],
      isLoading: true
    }
  
    componentDidMount(){
      ApiService.getPosts()
      .then(result => {
        this.setState({
          posts: result,
          isLoading: false
        });
      });

      
      ApiService.getComments()
      .then(result => {
        this.setState({
          comments: result,
          isLoading: false
        });
      });
    }

    render(){
    
        if(this.state.isLoading){
          return <p>Loading...</p>
        }

        return (
        
      <Fragment>
        Posts
      <ul>
        { this.state.posts.map((post) =>
        <li key={post.id}> {post.title} </li>
        ) }
      </ul>
      Comments
      
      <ul>
        { this.state.comments.map((comment) =>
        <li key={comment.id}> {comment.name} </li>
        ) }
      </ul>
    </Fragment>
        );
    }
}

export default ApiGet;