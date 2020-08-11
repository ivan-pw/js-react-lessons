'use strict';

const box = document.querySelector('.box');
const width = box.scrollWidth;
const height = box.scrollHeight;
const btn = document.querySelector('button');

console.log(width, height);

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 'px';
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.scrollTop);
