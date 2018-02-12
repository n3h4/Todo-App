import React, { Component } from 'react';
import TodoList from './Applist.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { title: '', todos: [] };

  }

  handleChange(e) {

    this.setState({ title: e.target.value });

  }

  handleSubmit(e) {

    e.preventDefault();

    var title =  this.state.title;
    var newTodos = this.state.todos.concat({title: title, done: false});

    this.setState({ title: '', todos: newTodos });
  }

  handleDelete(itemToBeDeleted) {

    // console.log(itemToBeDeleted);  
    var newTodos = this.state.todos.filter((todo) => {
      return todo.title !== itemToBeDeleted
    });

    this.setState({ todos: newTodos });
  }

  handleDone(markAsDone) {

    var _todo = this.state.todos;

    var todo = _todo.filter((todo) => {

      return todo.title === markAsDone;

    })[0];
    // console.log("working");

    todo.done = !todo.done;
    this.setState({ todos: _todo });
  }

  handleClearCompleted(event){
var newTodos = this.state.todos.filter((todo) => {return !todo.done});
this.setState({todos: newTodos});
  }
  render() {
    return (
      <div>
        <h1 className="header">Todo-List</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>

          <input className="additems" placeholder="Add your list here" onChange={this.handleChange.bind(this)}
            value={this.state.title} />
        </form>


        <TodoList 

        handleDelete={this.handleDelete.bind(this)} 
        todos={this.state.todos} 
        handleDone={this.handleDone.bind(this)}
        
        />
        <footer >
          

            <p className="status" id="all">All: {this.state.todos.length}</p>
            <p className="status">Completed: {this.state.todos.filter((todo) => { return todo.done }).length}</p>
            <p className="status">Pending: {this.state.todos.filter((todo) => { return !todo.done }).length}</p>
            <p  className="status" onClick={this.handleClearCompleted.bind(this)}>Clear Completed</p>

          

        </footer>
      </div>
    );
  }
}

export default App;
