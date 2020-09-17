const names = ['Ivan', 'Ann', 'Valentina'];

const shortNames = names.filter((name) => {
  return name.length < 5;
});

console.log(shortNames);

let answers = ['Ivan', 'ANN', 'Valentina'];

answers = answers.map((item) => {
  return item.toLowerCase();
});

console.log(answers);

console.log(`Пользователь: ${names[0]}`);

function fetchData(data, count = 'zero') {
  console.log(`Данные ${data},  ${count}`);
}

fetchData('1111');

function max(a, ...numbers) {
  console.log(numbers);
}

max(
  1,
  (dataGet) => {
    return 3;
  },
  'fff'
);

const arr1 = [1, 2, 5];
const arr2 = [43, 15, 1];

const res = Math.max(...arr1, ...arr2);
console.log(res);

const user = {
  name: 'def',
  pass: 'qwerty',
  rigths: 'user',
};
const admin = {
  name: 'admin',
  pass: 'qwerty',
};

// const res2 = Object.assign({}, user, admin);
// { name: 'admin', pass: 'qwerty', rigths: 'user' }

const res2 = { ...user, ...admin };
// { name: 'admin', pass: 'qwerty', rigths: 'user' }
console.log(res2);

const x = 25;
const y = 10;

// const coords = {
//   x: x,
//   y: y
// };
const coords = {
  x,
  y,
  calcSq() {
    console.log(this.x * this.y);
  },
};

coords.calcSq();

console.log(coords);

const user2 = {
  name: {
    first: 'Sam',
    second: 'Smith',
  },
  pass: 'qwerty',
  rigths: 'user',
};

// const userName = user2.name;
const {
  name: { first, second },
  pass,
  rigths,
} = user2;

// console.log(name)
// user

console.log(first);
// Sam

function connect({ host = 'localhost', port = 3000, user = 'default' } = {}) {
  // no error
  console.log(`host: ${host}, posr: ${port}`);
}

connect({
  port: 232,
});

connect({});
// error

// const numbers = [3,5,6,6];
// const [a,,c] = numbers;
// console.log(a, c);

const numbers = [
  [3, 5],
  [6, 6],
];
const [[a, b], [c, d]] = numbers;
console.log(a, b, c, d);

const country = {
  name: 'England',
  population: 20000000,
  gender: {
    male: ['15%', '40%'],
    female: ['16%', '29%'],
  },
};

// country.gender.male[0]

const {
  gender: {
    male: [maleUnder18, maleUnderAdult],
    female: [femaleUnder18, femaleAdult],
  },
} = country;

console.log(maleUnder18, femaleAdult);
// 15% 29%
