import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends Component {
  render() {
    console.log(Date.now());
    return (
      <div className="App">
        hello
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
