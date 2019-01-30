import React from 'react';

const TodoItem = props => {
  return (
    <div className="flex no-wrap p-2">
      <div
        className="bg-red text-grey-lightest rounded-full align-text-bottom"
        onClick={props.deleteItem} 
      > 
        x
      </div>
      <div 
        onClick={props.toggleComplete}
        className="p-2 bg-grey-light"
        style={{textDecoration: props.todoItem.completed
          ? 'line-through'
          : 'none'}}  
      >
        {props.todoItem.value}
      </div>
    </div>
  );
}

export default TodoItem;