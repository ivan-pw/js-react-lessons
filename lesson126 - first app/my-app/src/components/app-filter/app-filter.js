
import './app-filter.css';
import { v4 as uuidv4 } from 'uuid';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотруднки' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П > $1k' },
  ];

  const buttons = buttonsData.map(({ name, label })=>{
    const active = props.filter === name;
    const classBtn = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        key={uuidv4()}
        className={`btn ${classBtn}`}
        onClick={()=>props.onFilterSelect(name)}
        type="button">
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default AppFilter;
