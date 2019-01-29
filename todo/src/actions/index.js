export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todoList) => {

  return {
    type: ADD_TODO,
    payload: {
      value: 'example Todo',
      completed: false
    }
  };
}