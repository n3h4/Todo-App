import React, { Component } from 'react';

class TodoItem extends Component {

    // constructor() {
    //     super();
    //     this.state = { done: false };
    // }

    render() {
        var todo = this.props.todo;
        var title = todo.title;

        return (

            <li className={todo.done ? 'done' : ''}>

                <input type="checkbox"
                    onChange={this.props.handleDone.bind(null, todo.id)}
                    checked={todo.done}
                />  {title}
                <button className="delete" onClick={this.props.handleDelete.bind(null, todo.id)}></button>
            </li>

        );
    }
}

export default TodoItem;
