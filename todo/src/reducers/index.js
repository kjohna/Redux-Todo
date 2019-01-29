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
      const newTodo = {
        value: action.payload,
        completed: false,
        id: Date.now()
      }
      return {
        ...state,
        todoList: [
          ...state.todoList,
          newTodo
        ]
      }
    default:
      return state;
  };
};