import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
      nationality: 'uk',
    };

    // // привязываем метод к контексту конкретного экземпляра
    // this.nextYear = this.nextYear.bind(this);

    // //либо можно так
    // this.nextYear = () => {
    //   // this.state.years++  - неверно
    //   this.setState((state) => ({
    //     years: ++state.years,
    //   }));
    // };

    // или объявить обработчик событий стрелочной функцией (es9)
  }

  nextYear = () => {
    // this.state.years++  - неверно
    this.setState((state) => ({
      years: ++state.years,
    }));
  };

  render() {
    const { name, surname, link } = this.props;
    const { years } = this.state;
    return (
      <>
        <button onClick={this.nextYear}>+++</button>
        <h1>
          {/* My name is {props.name}, surname - {props.surname} */}
          My name is {name}, surname - {surname}, years = {years}
        </h1>
        <a href={link}>My profile</a>
      </>
    );
  }
}

// // function WhoAmI(props) {
// function WhoAmI({ name, surname, link }) {
//   return (
//     <>
//       <h1>
//         {/* My name is {props.name}, surname - {props.surname} */}
//         My name is {name}, surname - {surname}
//       </h1>
//       <a href={link}>My profile</a>
//     </>
//   );
// }

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="//fb.com" />
      <WhoAmI name="John2" surname="Smith" link="//vk.com" />
      <WhoAmI name="John3" surname="Smith" link="//tw.com" />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
