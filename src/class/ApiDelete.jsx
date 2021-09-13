import axios from "axios";
import { Fragment } from "react";
import { Component } from "react";

class ApiDelete extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
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

    render(){
    
        if(this.state.isLoading){
          return <p>Loading...</p>
        }

        return (
        
      <Fragment>
      <ul>
        { this.state.posts.map((post) =>
        <li key={post.id}> {post.title} <button onClick={() => this.handlerDelete(post.id)}>delete</button> </li>
        ) }
      </ul>
    </Fragment>
        );
    }
}

export default ApiDelete;