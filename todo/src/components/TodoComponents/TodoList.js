import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { toggleComplete, deleteItem } from '../../actions';

class TodoList extends React.Component {

  toggleComplete = id => {
    // console.log("toggle id: ", id);
    this.props.toggleComplete(id);
  }

  deleteItem = id => {
    // console.log("delete id: ", id);
    this.props.deleteItem(id);
  }

  render() {
    return (
      <div>
        Todo List!
        {this.props.todoList.map(todoItem => (
          <TodoItem 
            key={todoItem.id}
            todoItem={todoItem}
            toggleComplete={() => this.toggleComplete(todoItem.id)}
            deleteItem={() => this.deleteItem(todoItem.id)}
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

export default connect(mapStateToProps, { toggleComplete, deleteItem })(TodoList);