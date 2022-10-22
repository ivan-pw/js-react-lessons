import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {
  const elements = data.map((v, key)=>{
    const { id, ...itemProps } = v;
    return (
      // <EmployeesListItem name={v.name} salary={v.salary} />
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={()=>onDelete(id)} />
    );
  });

  // console.log(elements);

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default EmployeesList;
