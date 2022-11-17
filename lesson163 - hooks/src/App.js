import { Component, useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';

// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `Slide ${this.state.slide}`;
//   }

//   componentDidUpdate() {
//     document.title = `Slide ${this.state.slide}`;
//   }

//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }));
//   };

//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br />{' '}
//             {this.state.autoplay ? 'auto' : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(-1)}
//             >
//               -1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(1)}
//             >
//               +1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}
//             >
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }

// const calcValue = () => {
//   console.log('random');
//   return Math.random() * (50 - 1) + 1;
// };

const countTotal = (num) => {
  console.log('Counting...');
  return num + 10;
};

const Slider = (props) => {
  const [slide, setSlide] = useState(0); // можно передать функцию, но без вызова!
  //   const [slide, setSlide] = useState(() => calcValue()); // можно передать функцию, но без вызова!
  const [autoplay, setAutoplay] = useState(false);
  //   const [state, setState] = useState({ slide: 0, autoplay: false });

  function logging() {
    console.log('log');
  }

  useEffect(() => {
    // выполняется при рендере и обновлении компонента
    console.log('eff upd');
    document.title = `Slide ${slide}`;

    window.addEventListener('click', logging); // обработчики надо убирать

    return () => {
      window.removeEventListener('click', logging);
    };
  }, [slide]); // массив с зависимостями, если не менялись - не выполняется

  useEffect(() => {
    // выполняется при рендере и обновлении компонента
    console.log('eff mount');
    document.title = `Slide ${slide}`;
  }, []); // массив с зависимостями, если не менялись - не выполняется,
  // либо пустой массив - выполняться будет как componentsDidMount

  useEffect(() => {
    console.log('autoplay');
  }, [autoplay]);

  const getSomeImg = useCallback(() => {
    console.log('fetching');
    return [
      'https://www.yabloko.ru/files/styles/img_290_190_v2/public/externals/5264fd8332fd82c1c2a04e0d50ccc67d.jpg?itok=T1HNKscn',
      'https://www.yabloko.ru/files/styles/img_290_190_v2/public/externals/505985440e013f1941a82f606c59fa7d.jpg?itok=GbVf9kwo',
    ];
  }, []);

  //   console.log(slide);

  //   function changeSlide(i) {
  //     // setState((state) => ({ slide: state.slide + i, autoplay: state.autoplay }));
  //     setState((state) => ({ ...state, slide: state.slide + i }));
  //     // в хуковом стейте нужно обновлять объект полностью
  //   }

  //   function toggleAutoplay() {
  //     setState((state) => ({ ...state, autoplay: !state.autoplay }));
  //   }

  function changeSlide(i) {
    setSlide((slide) => slide + i); // с коллбеком со старым состоянием
    // setSlide(slide + i);
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
  }

  const total = useMemo(() => {
    // нельзя подписки и запросы, тк стреляет в рендере
    return countTotal(slide);
  }, [slide]);

  const style = useMemo(() => {
    // объекты - ссылки, не ==
    return {
      color: slide > 4 ? 'red' : 'black',
    };
  }, [slide]);

  useEffect(() => {
    console.log('Styles fires');
  }, [style]);

  return (
    <Container>
      <div className="slider w-50 m-auto">
        {/* {getSomeImg().map((url, i) => {
          return (
            <img className="d-block w-100" src={url} key={i} alt="slide" />
          );
        })} */}

        <Slides getSomeImg={getSomeImg}></Slides>
        <div className="text-center mt-5">
          Active slide {slide} <br /> {autoplay ? 'auto' : null}
        </div>
        <div className="text-center mt-5" style={style}>
          Total slides: {total}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const Slides = ({ getSomeImg }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImg());
  }, [getSomeImg]);

  return (
    <>
      {images.map((url, i) => (
        <img className="d-block w-100" src={url} key={i} alt="slide" />
      ))}
    </>
  );
};

function App() {
  const [slider, setSlider] = useState(true);

  return (
    <>
      <button onClick={() => setSlider(false)}>Remove slider</button>
      {slider ? <Slider /> : null}
    </>
  );
}

export default App;
