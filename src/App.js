import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import List from './List';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todoItem: '',
      items: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items : [...this.state.items, this.state.todoItem],
      todoItem: ''
    });
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange} />
          <button>Add</button>
        </form>

        <List items={this.state.items} />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
