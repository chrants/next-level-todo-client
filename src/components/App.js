import React, { Component } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
