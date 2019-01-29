import React from 'react';

const TodoItem = props => {
  return (
    <div>
      {props.todoItem.value}
    </div>
  );
}

export default TodoItem;