'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button.btn');
  let timerId;
  const i = 0;

  function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
      if (pos == 300) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }

  btn.addEventListener('click', myAnimation);
  /*
  function logger(text) {
    if (i === 3) {
      clearInterval(timerId);
    }
    console.log(text);
    i++;
  }
  */

  /*
  let id = setTimeout(function log() {
    console.log('hello');
    id = setTimeout(log, 500);
  }, 500);
  */
});
