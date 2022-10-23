import { Component, Fragment } from 'react';
import './App.css';

class WhoIAm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
      position: '',
    };
    // this.nextYear = this.nextYear.bind(this);
  }
  nextYear = ()=> {
    console.log('+++');

    // this.state.years++; - неверно
    // передаем состояние, чтобы асинхронность не сбивала счетчик
    // setState меняет только указанное
    this.setState((state) => ({
      years: state.years+1,
    }));
  };

  commitInputChanges = (e, color) => {
    // console.log(e.target.value);
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };
  // function WhoIAm({name, surname, link}) {
  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;

    console.log(this);
    return (
      <>
        {/*  or use <Fragment></Fragment> */}
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name},
        surname - {surname},
        age - {years}, position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность: </span>
          <input type="text"
            onChange={(e)=>this.commitInputChanges(e, 'some color')} ></input>
        </form>
      </>
    );
  }
}

// React.Fragment key="545"

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
