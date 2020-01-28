import React, { Component } from 'react';
import{BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Layout/Header";
import About from "./Components/Pages/About";
//import uuid from "uuid";
import Axios from 'axios';
class App extends Component {
  state = {
    todos: []
  }
  componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res=> this.setState({todos:res.data}))
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {

        if (todo.id === id) {
          todo.completed = !todo.completed

        }
        return todo;

      })
    });
  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) =>
        todo.id !== id)]

    });
  }
  addTodo=(title)=>{
    /* console.log(title);
    const newTodo={
      id:uuid.v4,
      title,
      completed: false */
      Axios.post("https://jsonplaceholder.typicode.com/todos", 
      {title:title, completed:false})
      .then (res=>this.setState({todos:[...this.state.todos, res.data]}))

    }
    //this.setState({todos:[...this.state.todos, newTodo]})
  
  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )}/>       
            <Route path="/about" component={About}/>   
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
