import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


const Header = ()=>{
//   const src = '<script>alert("1111111")</script>';
  return <h2>HW</h2>;
};

const Field = ()=>{
  const holder = 'Enter here';
  const styleField = {
    width: '300px',
  };
  return <input
    type="text"
    placeholder={holder}
    autoComplete=""
    className="first"
    htmlFor=""
    style={styleField}
  ></input>;
};

const Btn = ()=>{
  const text = `Log in`;
  const logged = false;
  //   const res = ()=>{
  //     return 'Log in, pls';
  //   };
  //   const p = <p>Log in</p>;
  return <button>{logged ? null : text}</button>;
};

const App = ()=>{
  return (
    <div>
      <Header />
      <Field />
      <Btn />
    </div>
  );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
