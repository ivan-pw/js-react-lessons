'use strict';

const now = new Date('2020-06-29');
// const now2 = Date.parse('2020-06-29');

console.log(now);
// console.log(now.setHours(40));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

const start = new Date();

for (let i = 0; i < 100000; i++) {
  const some = i ** 3;
}

const end = new Date();
console.log(`Готово за ${end - start} мс`);
