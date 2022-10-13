'use strict';

const btnPhone = document.querySelector('#iphone'),
  btnMacbook = document.querySelector('#macbook'),
  images = document.querySelectorAll('img');

// const phoneAnimation = images[0].animate(
//   [
//     { transform: 'translateY(0)' },
//     { transform: 'translateY(100px)' },
//     { transform: 'translateY(-100px)' },
//     { transform: 'translateY(0)' },
//   ],
//   { duration: 3000, iterations: Infinity }
// );
let phoneAnimation;
btnPhone.addEventListener('click', () => {
  if (!phoneAnimation) {
    phoneAnimation = images[0].animate(
      [
        {
          transform: 'translateY(0) rotate(0deg)',
          filter: 'opacity(100%)',
        },
        {
          transform: 'translateY(100px) rotate(180deg)',
          filter: 'opacity(50%)',
        },
        {
          transform: 'translateY(-100px) rotate(270deg)',
          filter: 'opacity(750%)',
        },
        {
          transform: 'translateY(0) rotate(360deg)',
          filter: 'opacity(100%)',
        },
      ],
      { duration: 3000, iterations: Infinity }
    );
  } else if (phoneAnimation.playState === 'paused') {
    phoneAnimation.play();
  } else {
    phoneAnimation.pause();
  }
});

let nbAnimation;

btnMacbook.addEventListener('click', () => {
  if (!nbAnimation) {
    nbAnimation = images[1].animate(
      [
        { transform: 'scaleY(1)' },
        { transform: 'scaleY(1.5)' },
        { transform: 'scaleY(1)' },
      ],
      {
        duration: 500,
        iterations: 5000,
      }
    );
  } else if (nbAnimation.playState === 'paused') {
    nbAnimation.play();
  } else {
    nbAnimation.pause();
  }
});
