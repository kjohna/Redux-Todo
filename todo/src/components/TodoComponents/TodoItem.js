import React from 'react';

const TodoItem = props => {
  const completedStyle = props.todoItem.completed
    ? 'line-through bg-green'
    : 'bg-grey-light';
  return (
    <div className="flex no-wrap p-2">
      <div
        className="bg-transparent text-red hover:bg-red hover:text-grey-lightest rounded-full cursor-pointer"
        onClick={props.deleteItem} 
      > 
        x
      </div>
      <div 
        onClick={props.toggleComplete}
        className={`p-2 ${completedStyle}`}
      >
        {props.todoItem.value}
      </div>
    </div>
  );
}

export default TodoItem;