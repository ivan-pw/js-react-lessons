'use strict';


const app = 24;

const number = 1;

(function() {
  const number = 2;
  console.log(number);
  console.log(number + 3);
}());

console.log(number);


const user = (function() {
  const privat = function() {
    console.log('Its private');
  };

  return {
    sayHello: privat,
  };
}());

user.sayHello();
