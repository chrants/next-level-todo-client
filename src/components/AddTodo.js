import React from 'react';

const AddTodo = () => {
    return (
        <form autocomplete="off">
            <input type="text" name="content" required="true" />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;