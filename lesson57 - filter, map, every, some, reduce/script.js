'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voland'];

const shortNames = names.filter(function(name) {
  return name.length < 5;
});

console.log(shortNames);

// map

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map((item) => {
  return item.toLowerCase();
});

console.log(result);


// every / some

const some = [4, 'DFGdfg', 'dDrrRRRRR'];

// ~ ||
console.log(some.some((item) => typeof(item) === 'number'));
// ~ &&
console.log(some.every((item) => typeof(item) === 'number'));


// reduce

const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current, 3); // sum - аккумулятор, 3 - начальное значение аккулумятора
console.log(res); // 21

const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => sum + ', ' + current);
console.log(res2);


const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal',
};

const newArr = Object.entries(obj)
    .filter((item) => item[1] === 'persone')
    .map((item) => item[0]);

console.log(newArr);
