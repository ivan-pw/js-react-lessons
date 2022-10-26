import { Component, Fragment } from 'react';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  boxshadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  a {
    display: block;
    margin: 10px, 0 10px 0;
    color: ${(props) => (props.active ? 'orange' : 'black')};
  }

  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

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
  nextYear = () => {
    console.log('+++');

    // this.state.years++; - неверно
    // передаем состояние, чтобы асинхронность не сбивала счетчик
    // setState меняет только указанное
    this.setState((state) => ({
      years: state.years + 1,
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
      <EmpItem active>
        {/*  or use <Fragment></Fragment> */}
        <Button onClick={this.nextYear}>{this.state.text}</Button>
        <Header>
          My name is {name}, surname - {surname}, age - {years}, position -{' '}
          {position}
        </Header>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность: </span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, 'some color')}
          ></input>
        </form>
      </EmpItem>
    );
  }
}

// React.Fragment key="545"

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <WhoIAm
        name="John"
        surname="Smith"
        link="fb.com"
        some={{ firstName: 'John' }}
      />
      {/* <WhoIAm
      name={()=>{ return 'John'}}
      surname='Bolton'
      link='tw.com' /> */}
      <WhoIAm name="Alex" surname="Bolton" link="tw.com" />
    </Wrapper>
  );
}

export default App;
