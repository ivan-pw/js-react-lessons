import { useState, useCallback } from 'react';

import Form from './Form';
import dataContext from './context';

import './App.css';

const { Provider } = dataContext;

// class Form extends Component {
//   // встроен в PureComponent
//   shouldComponentUpdate(nextProps, nextState) {
//     if (
//       this.props.mail.name === nextProps.mail.name &&
//       this.props.text === nextProps.text
//     )
//       return false; // не обновляем
//     return true;
//   }

//   render() {
//     console.log('Render');

//     return (
//       <Container>
//         <form className="w-50 border mt-5 p-3 m-auto">
//           <div className="mb-3">
//             <label
//               htmlFor="exampleFormControlInput1"
//               className="form-label mt-3"
//             >
//               Email address
//             </label>
//             <input
//               value={this.props.mail.name}
//               type="email"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="name@example.com"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">
//               Example textarea
//             </label>
//             <textarea
//               value={this.props.text}
//               className="form-control"
//               id="exampleFormControlTextarea1"
//               rows="3"
//             ></textarea>
//           </div>
//         </form>
//       </Container>
//     );
//   }
// }

// function propsCompare(prevProps, nextProps) {
//   return (
//     prevProps.mail.name === nextProps.mail.name &&
//     prevProps.text === nextProps.text
//   );
// }

// class InputComponent extends Component {
//   render() {
//     return (
//       // <Consumer>
//       //   {(value) => {
//       //     return (
//       //       <input
//       //         value={value.mail}
//       //         type="email"
//       //         className="form-control"
//       //         id="exampleFormControlInput1"
//       //         placeholder="name@example.com"
//       //       />
//       //     );
//       //   }}
//       // </Consumer>
//       <input
//         value={this.context.mail}
//         type="email"
//         className="form-control"
//         id="exampleFormControlInput1"
//         placeholder="name@example.com"
//       />
//     );
//   }
// }

// InputComponent.contextType = dataContext;

// console.dir(dataContext);

function App() {
  const [data, setData] = useState({
    mail: 'name@example.com',
    // mail: { name: 'name@example.com' },
    text: 'some text',
    forceChangeMail: forceChangeMail,
  });

  function forceChangeMail() {
    setData({ ...data, mail: 'third@gmail.com' });
  }

  const onLog = useCallback(() => console.log('log'), []);

  return (
    <Provider value={data}>
      {/*  вот так value={{ smth: smth }} */}
      <Form mail={data.mail} text={data.text} onLog={onLog} />
      {/* <Form mail={data.mail} text={data.text} onLog={onLog} /> */}
      <button
        onClick={() =>
          setData({
            ...data,
            mail: 'second@example.com',
            // mail: { name: 'name@example.com' },
            text: 'some text 2',
          })
        }
      >
        Click me
      </button>
    </Provider>
  );
}

export default App;
