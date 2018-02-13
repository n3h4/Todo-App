import React, { Component } from 'react';
import TodoItem from './List-item.js';



class TodoList extends Component {

    render() {
        return (

            <div>

                <ul className="list">

                    {this.props.todos.map((todo, i) => {
                        return <TodoItem key={i} todo={todo} handleDelete={this.props.handleDelete} handleDone={this.props.handleDone} />
                    })}

                </ul>

            </div>
        );
    }
}
export default TodoList;
