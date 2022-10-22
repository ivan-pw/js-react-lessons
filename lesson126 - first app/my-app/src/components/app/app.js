
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
          id: uuidv4(),
        },
        {
          name: 'Alex',
          salary: 3000,
          increase: true,
          id: uuidv4(),
        },
        {
          name: 'Carl',
          salary: 5000,
          increase: false,
          id: uuidv4(),
        }] };
  }

  deleteItem=(id)=>{
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
      id: uuidv4(),
    };

    this.setState(({ data })=>{
      return {
        data: [...data, newItem],
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
