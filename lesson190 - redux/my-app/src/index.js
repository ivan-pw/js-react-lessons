import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, createStore } from 'redux';

import './index.css';
import App from './App';

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DEC':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'RND':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
};

store.subscribe(update);
// store.subscribe(() => {
//   console.log(store.getState());
// });

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (v) => ({ type: 'RND', payload: v });

document.getElementById('inc').addEventListener('click', (e) => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', (e) => {
  store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', (e) => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});

// document.getElementById('rnd').addEventListener('click', (e) => {
//   const value = Math.floor(Math.random() * 10);
//   store.dispatch({ type: 'RND', payload: value });
// });

// console.log(store.getState());
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
// console.log(store.getState());

// let state = reducer(initialState, { type: 'INC' });
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
