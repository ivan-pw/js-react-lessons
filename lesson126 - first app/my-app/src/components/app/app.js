
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'John',
          salary: 800,
          increase: true,
          rise: true,
          id: uuidv4(),
        },
        {
          name: 'Alex',
          salary: 3000,
          increase: true,
          rise: false,
          id: uuidv4(),
        },
        {
          name: 'Carl',
          salary: 5000,
          increase: false,
          rise: false,
          id: uuidv4(),
        }] };
  }

  deleteItem = (id)=>{
    // console.log(id);
    this.setState(({ data })=>{
      // const index = data.findIndex((elem) => elem.id == id);

      // console.log(index);
      // data.splice(index, 1);  - не правильно, не меняем стейт напрямую

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];


      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: uuidv4(),
    };

    this.setState(({ data })=>{
      return {
        data: [...data, newItem],
      };
    });
  };

  onToggleProp = (id, prop) => {
    // this.setState(({ data })=>{
    // const index = data.findIndex((elem)=>elem.id === id);
    // const old = data[index];
    // const newItem = { ...old, increase: !old.increase };
    // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    // return { data: newArr };
    // });

    this.setState(({ data })=>({
      data: data.map((item)=>{
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }

        return item;
      }),
    }));
  };

  // onToggleRise = (id) => {
  //   console.log(`Rise this ${id}`);
  // };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;


    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
