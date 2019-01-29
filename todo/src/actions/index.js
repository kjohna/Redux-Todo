export const ADD_TODO = 'ADD_TODO';

export const addTodo = (newTodo) => {
  console.log("action: addTodo");
  return {
    type: ADD_TODO,
    payload: {
      value: newTodo,
      completed: false,
      id: Date.now()
    }
  };
}