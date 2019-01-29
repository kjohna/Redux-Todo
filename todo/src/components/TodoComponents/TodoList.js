import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

class TodoList extends React.Component {

  render() {
    return (
      <div>
        Todo List!
        {this.props.todoList.map(todoItem => (
          <TodoItem 
            key={todoItem.id}
            todoItem={todoItem} />
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

export default connect(mapStateToProps, {})(TodoList);