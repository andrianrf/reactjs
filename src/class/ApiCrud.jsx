import axios from "axios";
import { Fragment } from "react";
import { Component } from "react";
import ApiService from "../services/ApiService";

class ApiCrud extends Component {
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
        isUpdate: false,
        isLoading: true
      }
    }

    getData = () => {
      ApiService.getPosts()
      .then(result => {
        this.setState({
          posts: result,
          isLoading: false
        });
      });
    }

    

    postApi = () => {

      ApiService.postPosts(this.state.form)
      .then((res) =>{
        this.getData();
      })

    }

    setDefaultValueForm = () => {
      this.setState({
        form:{
          id:0,
          title: "",
          body: "",
          userId: 1
        },
        isUpdate: false
      });
      this.getData();
    }

    handlerDelete = (id) => {
      
      ApiService.deletePost(id)
      .then((res) =>{
        this.getData();
      })
      
    }
  
    componentDidMount(){
      this.setDefaultValueForm();
    }

    handleFormOnChange = (event) => {
      let newForm = {...this.state.form}
      if(!this.state.isUpdate){
      newForm['id'] = new Date().getTime();
      }
      newForm[event.target.name] = event.target.value;
      this.setState({
        form: newForm
      });
    }

    postApi = () => {

      ApiService.postPosts(this.state.form)
      .then((res) =>{
        this.getData();
      })

    }

    postApiV2 = () => {
      ApiService.postPosts(this.state.form)
      .then((res) =>{
        this.getData();
      })
    }

    handlerUpdate = (data) => {
      this.setState({
        isUpdate:true,
        form:data
      });
    }
    
    putApi = () => {

      ApiService.putPost(this.state.form.id, this.state.form)
      .then((res) =>{
        this.getData();
      })

    }

    putApiV2 = () => {
      axios.put('http://localhost:3004/posts/'+this.state.form.id, this.state.form)
      .then(() => {
        this.setDefaultValueForm();
      }
      )
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      if(this.state.isUpdate){
        this.putApi();
      }
      else{
      this.postApi();
      }
    }
    
    render(){
    
        if(this.state.isLoading){
          return <p>Loading...</p>
        }

        return (
        
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" onChange={this.handleFormOnChange} value={this.state.form.title} />
          <input type="text" name="body" onChange={this.handleFormOnChange} value={this.state.form.body} />
          <button>Submit</button>
        </form>
      <ul>
        { this.state.posts.map((post) =>
        <li key={post.id}> 
        {post.title}, {post.body} 
        <button onClick={() => this.handlerDelete(post.id)}>delete</button> 
        <button onClick={() => this.handlerUpdate(post)}>update</button> 
        </li>
        ) }
      </ul>
    </Fragment>
        );
    }
}

export default ApiCrud;