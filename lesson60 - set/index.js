'use strict';

// const arr = [1, 1, 2, 2, 4, 6, 5, 6];
// const set = new Set(arr);

// console.log(set);

const arr = ['Alex', 'Anna', 'Anna'];
const set = new Set(arr);

set.add('Ivan').add('Oleg');

console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) {
//   console.log(value);
// }

set.forEach((value, valueAgain, set) => {
  console.log(value);
  console.log(valueAgain);
});

console.log(set.values());
console.log(set.keys());
console.log(set.entries());

function unique(arr) {
  // return new Set(arr);
  return Array.from(new Set(arr));
}

console.log(unique(arr));
