import React, { Component } from 'react';
import TodoItem from './List-item.js';



class TodoList extends Component {

    render() {
        return (

            <div>

                <ul className="list">
                    {this.props.todos.map((todo, index) => {

                        return <TodoItem

                            key={index}
                            todo={todo}
                            handleDelete={this.props.handleDelete.bind(null, todo.title)}
                            handleDone={this.props.handleDone}


                             />
                    })}

                </ul>

            </div>
        );
    }
}
export default TodoList;
