import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { toggleComplete } from '../../actions';

class TodoList extends React.Component {

  toggleComplete = id => {
    console.log("toggle id: ", id);
    this.props.toggleComplete(id);
  }

  render() {
    return (
      <div>
        Todo List!
        {this.props.todoList.map(todoItem => (
          <TodoItem 
            key={todoItem.id}
            todoItem={todoItem}
            onClick={() => this.toggleComplete(todoItem.id)}
           />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  };
};

export default connect(mapStateToProps, { toggleComplete })(TodoList);