import './app-filter.css';
import { v4 as uuidv4 } from 'uuid';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотруднки', colored: false },
    { name: 'rise', label: 'На повышение', colored: false },
    { name: 'moreThen1000', label: 'З/П > $1k', colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = props.filter === name;
    const classBtn = active ? 'btn-light' : 'btn-outline-light';
    const style = colored ? { color: 'red' } : null;
    return (
      <button
        key={uuidv4()}
        className={`btn ${classBtn}`}
        onClick={() => props.onFilterSelect(name)}
        style={style}
        type="button"
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
