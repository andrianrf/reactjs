import axios from "axios";
import { Fragment } from "react";
import { Component } from "react";

class ApiPost extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
        form:{
          id:0,
          title: "",
          body: "",
          userId: 1
        },
        isLoading: true
      }
    }

    getData = () => {
        fetch("http://localhost:3004/posts?_sort=id&_order=desc")
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

    handleFormOnChange = (event) => {
      let newForm = {...this.state.form}
      newForm['id'] = new Date().getTime();
      newForm[event.target.name] = event.target.value;
      this.setState({
        form: newForm
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.postApi();
    }

    postApi = () => {

      fetch("http://localhost:3004/posts", { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.form)
       })
      .then((res) => {
          console.log(res);
          this.getData();
      });

    }

    postApiV2 = () => {
      axios.post('http://localhost:3004/posts', this.state.form)
      .then((res) => {
        console.log(this.state.form);
        this.getData();
      },(err) => {
        console.log(err);
      }
      )
    }

    render(){
    
        if(this.state.isLoading){
          return <p>Loading...</p>
        }

        return (
        
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" id="title" onChange={this.handleFormOnChange} />
          <input type="text" name="body" id="body" onChange={this.handleFormOnChange} />
          <button>Submit</button>
        </form>
      <ul>
        { this.state.posts.map((post) =>
        <li key={post.id}> {post.title}, {post.body} <button onClick={() => this.handlerDelete(post.id)}>delete</button> </li>
        ) }
      </ul>
    </Fragment>
        );
    }
}

export default ApiPost;