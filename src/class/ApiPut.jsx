import axios from "axios";
import { Fragment } from "react";
import { Component } from "react";

class ApiPut extends Component {
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
      if(!this.state.isUpdate){
      newForm['id'] = new Date().getTime();
      }
      newForm[event.target.name] = event.target.value;
      this.setState({
        form: newForm
      });
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

    handlerUpdate = (data) => {
      this.setState({
        isUpdate:true,
        form:data
      });
    }
    
    putApi = () => {

      fetch("http://localhost:3004/posts/"+this.state.form.id, { 
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.form)
       })
      .then((res) => {
          console.log(res);
          this.getData();
      });

    }

    putApiV2 = () => {
      axios.put('http://localhost:3004/posts/'+this.state.form.id, this.state.form)
      .then((res) => {
        console.log(this.state.form);
        this.getData();
      },(err) => {
        console.log(err);
      }
      )
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      if(this.state.isUpdate){
        this.putApiV2();
      }
      else{
      this.postApi();
      }
      this.setDefaultValueForm();
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

export default ApiPut;