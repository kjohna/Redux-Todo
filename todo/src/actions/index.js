export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addTodo = (newTodo) => {
  // console.log("action: addTodo");
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export const toggleComplete = (id) => {
  // console.log("action: toggleComplete");
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  }
}

export const deleteItem = (id) => {
  // console.log("action: deleteItem");
  return {
    type: DELETE_ITEM,
    payload: id
  }
}