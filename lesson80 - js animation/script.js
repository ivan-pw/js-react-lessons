'use strict';

const btn = document.querySelector('.btn');
const elem = document.querySelector('.box');
let pos = 0;

// function myAnimation() {
//     let pos = 0;
//
//     const id = setInterval(frame, 10);
//
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
  pos++;
  elem.style.top = pos + 'px';
  elem.style.left = pos + 'px';

  if (pos < 300) {
    requestAnimationFrame(myAnimation);
  }
}

btn.addEventListener('click', ()=>requestAnimationFrame(myAnimation));

const id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);
