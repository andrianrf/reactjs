import axios from "axios";
import { Fragment } from "react";
import { Component } from "react";

class ApiPost extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
        form:{
          userId: 1
        },
        isLoading: true
      }
    }

    getData = () => {
        fetch("http://localhost:3004/posts")
        .then(Response => Response.json())
        .then(data => this.setState(
          {posts:data, isLoading:false}
          ));
    }

    handlerDelete = (id) => {
        fetch("http://localhost:3004/posts/"+id, { method: 'DELETE' })
            .then((res) => {
                console.log(res);
                this.getData();
            });
    }

    handlerDeleteV2 = (id) => {
        axios.delete("http://localhost:3004/posts/"+id)
        .then((res)=>{
            console.log(res);
            this.getData();
        });
    }
  
    componentDidMount(){
      this.getData();
    }

    handleSubmit = (event) => {
      console.log(event);
    }

    render(){
    
        if(this.state.isLoading){
          return <p>Loading...</p>
        }

        return (
        
      <Fragment>

        <form>
          <input type="text" name="title" />
          <input type="text" name="body" />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>

      <ul>
        { this.state.posts.map((post) =>
        <li key={post.id}> {post.title} <button onClick={() => this.handlerDelete(post.id)}>delete</button> </li>
        ) }
      </ul>
    </Fragment>
        );
    }
}

export default ApiPost;