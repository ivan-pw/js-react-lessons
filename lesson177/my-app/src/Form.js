import { memo } from 'react';
import { Container } from 'react-bootstrap';

import InputComponent from './Input';

// пресекает повторный рендер при одинаковых пропсах
const Form = memo((props) => {
  // сравнивает поверхностно
  console.log('Render');

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          {/* <input
              value={props.mail}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            /> */}

          <InputComponent />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={props.text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
});

export default Form;
