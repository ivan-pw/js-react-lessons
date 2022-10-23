import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
  const elements = data.map((v, key)=>{
    const { id, ...itemProps } = v;
    // console.log(1);
    return (
      // <EmployeesListItem name={v.name} salary={v.salary} />
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={()=>onDelete(id)}
        onToggleProp={(e)=>onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        onSalaryChange={(e)=>onSalaryChange(id, e.currentTarget.value)}
      />
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
