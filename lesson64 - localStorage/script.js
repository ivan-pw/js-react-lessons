'use strict';

// localStorage.setItem('number', 5);


// console.log(localStorage.getItem('number'));

// localStorage.clear();
// localStorage.removeItem('number');

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg', 'changed')) {
  form.style.backgroundColor = '#f00';
}

checkbox.addEventListener('change', ()=>{
  localStorage.setItem('isChecked', true);
});


change.addEventListener('click', ()=>{
  if (localStorage.getItem('bg', 'changed')) {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = '#f00';
  }
});

const persone = {
  name: 'Alex',
  age: 25,
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(localStorage.getItem('alex'));

