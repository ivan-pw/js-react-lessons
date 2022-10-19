import { Component } from 'react';
import './App.css';

class WhoIAm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
    };
  }
  nextYear = () => {
    console.log('+++');

    // this.state.years++; - неверно
    // передаем состояние, чтобы асинхронность не сбивала счетчик
    // setState меняет только указанное
    this.setState((state) => ({
      years: state.years+1,
    }));
  };
  // function WhoIAm({name, surname, link}) {
  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name},
        surname - {surname},
        age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoIAm name='John'
        surname='Smith'
        link='fb.com'
        some={{ firstName: 'John' }} />
      {/* <WhoIAm
      name={()=>{ return 'John'}}
      surname='Bolton'
      link='tw.com' /> */}
      <WhoIAm name='Alex' surname='Bolton' link='tw.com' />
    </div>
  );
}

export default App;
