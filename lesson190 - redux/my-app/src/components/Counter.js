import { connect } from 'react-redux';
import { inc, dec, rnd } from '../actions';
import { Component } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// import { bindActionCreators } from 'redux';

// class Counter extends Component {
//   render() {
//     const { counter, inc, dec, rnd, smth } = this.props;

//     return (
//       <div>
//         <h1>
//           {counter} {smth}
//         </h1>
//         <button onClick={dec} className="btn btn-primary">
//           DEC
//         </button>
//         <button onClick={inc} className="btn btn-primary">
//           INC
//         </button>
//         <button onClick={rnd} className="btn btn-primary">
//           RND
//         </button>
//       </div>
//     );
//   }
// }

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        {counter}
        {/* {smth} */}
      </h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primary">
        DEC
      </button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        INC
      </button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary">
        RND
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counter: state.value,
//     smth: state.foo,
//   };
// };

export default Counter;
