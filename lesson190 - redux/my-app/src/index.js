import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, createStore, bindActionCreators } from 'redux';

import * as actions from './actions';
// import { rnd, dec, inc } from './actions';
import { reducer } from './reducer';

import './index.css';
import App from './App';

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

subscribe(update);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

const { inc, dec, rnd } = bindActionCreators(
  actions,
  // {
  //   incDispatch: actions.inc,
  //   decDispatch: actions.dec,
  //   rndDispatch: actions.rnd,
  // },
  dispatch
);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document
  .getElementById('rnd')
  .addEventListener('click', () => rnd(Math.floor(Math.random() * 10)));

// document.getElementById('rnd').addEventListener('click', (e) => {
//   const value = Math.floor(Math.random() * 10);
//   store.dispatch({ type: 'RND', payload: value });
// });

// console.log(store.getState());
dispatch({ type: 'INC' });
dispatch({ type: 'INC' });
// console.log(store.getState());

// let state = reducer(initialState, { type: 'INC' });
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
