import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {

  render() {
    return (
      <div>
        Todo List!
        {this.props.todoList.map(todoItem => (
          <div key={todoItem.id}>
            {todoItem.value}
          </div>
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