import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

class Form extends Component {
  //   myRef = React.createRef();

  //   mySecondRef = React.createRef();

  //   componentDidMount() {
  //     this.myRef.current.focus();
  //     // this.myRef.current.doSmth(); // вызов метода компонентов
  //   }

  setInputRef = (el) => {
    this.myRef = el;
  };

  focusFirstTI = () => {
    if (this.myRef) {
      this.myRef.focus(); // в колбеке ref не будет current
    }
  };

  render() {
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>

            <input
              //   ref={this.myRef}
              ref={this.setInputRef}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            {/* <TextInput ref={this.myRef}></TextInput> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              onClick={this.focusFirstTI}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </Container>
    );
  }
}

// ref не работает на функциональных компонентах,
// только на классовых, тк классовые создают экземпляр класса
class TextInput extends Component {
  doSmth = () => {
    console.log('Up!');
  };

  render() {
    return (
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    );
  }
}

function App() {
  return <Form />;
}

export default App;
