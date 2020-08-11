'use strict';

// try {
//   console.log('ok');
//   console.log(a);
//   console.log('after error');
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// } finally {
//   console.log('work anyway');
// }

// console.log('no stop');


try {
  document.querySelector('.active').addEventListener('click', ()=>{
    console.log('click');
  });
} catch (e) {
  console.log(e);
}


console.log('still going');
