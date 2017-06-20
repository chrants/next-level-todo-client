import React, { Component } from 'react';

import Todo from './Todo';
// import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                {
                    content: "Item A",
                    completed: false
                },
                {
                    content: "B is Cool",
                    completed: false
                },
                {
                    content: "C for Completed",
                    completed: true
                }
            ]
        };
    }

    render() {
        return (
            <ul>
                {this.state.todoItems.map((item) =>
                    <Todo completed={item.completed} content={item.content} />
                )}
            </ul>
        );
    }
}

export default TodoList;
