import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoList';
import './App.css';

class App extends Component {
  render() {
    console.log(Date.now());
    return (
      <div className="App">
        hello
        <TodoList />
      </div>
    );
  }
}

export default App;
