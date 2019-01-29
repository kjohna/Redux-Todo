import React from 'react';

const TodoItem = props => {
  return (
    <>
      <div
        onClick={props.deleteItem} 
      > 
        delete - 
      </div>
      <div 
        onClick={props.toggleComplete}
        style={{textDecoration: props.todoItem.completed
          ? 'line-through'
          : 'none'}}  
      >
        {props.todoItem.value}
      </div>
    </>
  );
}

export default TodoItem;