// import logo from './logo.svg';
import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world</h2>;
};

// const Field = () => {
//   const holder = 'Type here';
//   const styledField = {
//     width: '300px',
//   };
//   return
{
  /* <input placeholder={holder} type="text" style={styledField}></input>; */
}
// };

// Классы как элементы всегда нужно наследовать от реакта
class Field extends Component {
  render() {
    const holder = 'Type here';
    const styledField = {
      width: '300px',
    };

    return <input placeholder={holder} type="text" style={styledField}></input>;
  }
}

function Btn() {
  // const text = 'Log in';
  // const res = () => {
  //   return 'Log in';
  // };
  // const p = <p>Log in</p>;
  // return <button>{text}</button>;
  // return <button>{res()}</button>;
  // return <button>{p}</button>;

  const text = 'Log in';
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>;
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header></Header>
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
