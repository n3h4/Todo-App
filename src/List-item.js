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

            <li>

                <input type="checkbox"
                    onChange={this.props.handleDone.bind(null, title)}
                    checked={todo.done}
                />  {title}
                <button className="delete" onClick={this.props.handleDelete.bind(null, title)}></button>
            </li>

        );
    }
}

export default TodoItem;
