import React from 'react';

const Todo = ({ content, completed }) => {
    return (
        <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={completed} />
            <span>{content}</span>
        </li>
    );
}

export default Todo;