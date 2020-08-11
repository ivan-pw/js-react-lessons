'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите имя');

// const reg = /\d/ig;
// console.log(ans.match(reg));


const str = 'My name is r2d2';

console.log(str.match(/\w\d\w\d/i)); // r2d2


// \d - цифры
// \w - буквы
// \s - space

// \D - !цифры
// \W - !буквы
// \S - !space

// i - регистронезависимый
// g - глобальный (много вхождений)
// m - мультилайн


// console.log(ans.search(reg));
// console.log(ans.match(reg));


// const pass = prompt('Password');

// console.log(pass.replace(/\./g, '*'));


// console.log('12-34-56'.replace(/-/g, ':'));
