export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = (newTodo) => {
  console.log("action: addTodo");
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export const toggleComplete = (id) => {
  console.log("action: toggleComplete");
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  }
}