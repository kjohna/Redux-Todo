import { ADD_TODO } from '../actions';

const initialState = {
  todoList: [
    {
      value: 'Open Todo App',
      completed: true,
      id: 1548771530840
    },
    {
      value: 'add Todos!',
      completed: false,
      id: 1548771581473
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          action.payload
        ]
      }
    default:
      return state;
  };
};