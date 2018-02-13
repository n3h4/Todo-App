import React, { Component } from 'react';

class TodoItem extends Component {

    constructor() {
        super();
        this.state = { editing: false };
    }
componentDidMount(){
    this.setState({changedText: this.props.todo.title});
 
} 
    handleEditing(event) {
        this.setState({editing: true, changedText: this.props.todo.title});

    }

    handleEditingDone(event) {

        // console.log("fdfdf");
        if(event.keyCode === 13){
        this.setState({editing: false});
    }
    }

    handleEditingChange(event) {

        this.setState({changedText: event.target.value});
    }

    render() {

        var todo = this.props.todo;
        // var title = todo.title;
        var viewStyle = {};
        var editStyle = {};

        if (this.state.editing) {
            viewStyle.display="none";

        }else {
            editStyle.display="none";
        }

        return (

            <li className={todo.done ? 'done' : ''}>

                <div style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>

                    <input type="checkbox"
                        onChange={this.props.handleDone.bind(null, todo.id)}
                        checked={todo.done}
                    />  
                    
                    {this.state.changedText}

                    <button className="delete" onClick={this.props.handleDelete.bind(null, todo.id)}></button>

                </div>

                <input type="text" value={this.state.changedText}

                onKeyDown={this.handleEditingDone.bind(this)}

                onChange={this.handleEditingChange.bind(this)}

                    style={editStyle} />
            </li>

        );
    }
}

export default TodoItem;
