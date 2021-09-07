import axios from "axios";
import { Fragment } from "react";
import { Component } from "react";

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
        fetch("http://localhost:3004/posts?_sort=id&_order=desc")
        .then(Response => Response.json())
        .then(data => this.setState(
          {posts:data, isLoading:false}
          ));
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
        fetch("http://localhost:3004/posts/"+id, { method: 'DELETE' })
            .then(() => {
                this.setDefaultValueForm();
            });
    }

    handlerDeleteV2 = (id) => {
        axios.delete("http://localhost:3004/posts/"+id)
        .then(()=>{
            this.setDefaultValueForm();
        });
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

      fetch("http://localhost:3004/posts", { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.form)
       })
      .then(() => {
          this.setDefaultValueForm();
      });

    }

    postApiV2 = () => {
      axios.post('http://localhost:3004/posts', this.state.form)
      .then(() => {
        console.log(this.state.form);
        this.setDefaultValueForm();
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
      .then(() => {
          this.setDefaultValueForm();
      });

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