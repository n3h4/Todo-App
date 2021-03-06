import React, { Component } from 'react';

class TodoItem extends Component {

    constructor() {
        super();
        this.state = { editing: false };
    }

    componentDidMount() {
        this.setState({ changedText: this.props.todo.title });
    }

    handleEditing(event) {
        this.setState({ editing: true, changedText: this.props.todo.title });
    }

    handleEditingDone(event) {

        if (event.keyCode === 13) {
            this.setState({ editing: false });
        }

    }

    handleEditingChange(event) {
        this.setState({ changedText: event.target.value });
    }
    

    render() {

        const todo = this.props.todo;
        const viewStyle = {};
        const editStyle = {};

        if (this.state.editing) {
            viewStyle.display = "none";

        } else {
            editStyle.display = "none";
        }

        return (

            <li className={todo.done ? 'done' : ''}>

                <div style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>

                    <input type="checkbox" onChange={() => this.props.handleDone(todo.id)} checked={todo.done} />

                    {this.state.changedText}

                    <button className="delete" onClick={this.props.handleDelete.bind(this, todo)}></button>

                </div>

                    <input type="text" onKeyDown={this.handleEditingDone.bind(this)}
                    onChange={this.handleEditingChange.bind(this)} style={editStyle} />

            </li>

        );
    }
}

export default TodoItem;
