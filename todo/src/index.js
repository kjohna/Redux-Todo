import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

import App from './App';
import './index.css';

// persist state in local storage following example from:
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
