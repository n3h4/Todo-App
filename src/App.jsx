import React, { Component } from 'react';
import TodoList from './Applist.js';
import './App.css';

const random = require("random-key");

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
    const title = this.state.title;
    const newTodos = this.state.todos.concat({ title: title, id: random.generate(), done: false });
    localStorage.setItem('todos', JSON.stringify(newTodos));
    this.setState({ title: '', todos: newTodos });

  }

  handleDelete(itemToBeDeleted) {

    const newTodos = this.state.todos.filter((todo) => todo.id !== itemToBeDeleted);
    this.setState({ todos: newTodos });

  }

  handleDone(markAsDone) {

    const _todo = this.state.todos;
    const todo = _todo.find(({ id }) => id === markAsDone)
    todo.done = !todo.done;
    localStorage.setItem('todos', JSON.stringify(todo));
    this.setState({ todos: _todo });

  }

  handleClearCompleted(event) {

    const newTodos = this.state.todos.filter((todo) => { return !todo.done });
    this.setState({ todos: newTodos });

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
          <p className="status" onClick={this.handleClearCompleted.bind(this)}>Clear Completed</p>
        </footer>
      </div>
    );
  }
}

export default App;
