import React from 'react';
import './App.css';

function WhoIAm(props) {
// function WhoIAm({name, surname, link}) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  );
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
