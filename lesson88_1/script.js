'use strict';

const films = [
  {
    name: 'Titanic',
    rating: 9,
  },
  {
    name: 'Die hard 5',
    rating: 5,
  },
  {
    name: 'Matrix',
    rating: 8,
  },
  {
    name: 'Some bad film',
    rating: 4,
  },
];

function showGoodFilms(arr) {
  //   console.log(arr);
  return arr.filter((v) => v.rating >= 8);
}

// console.log(showGoodFilms(films));

function showListOfFilms(arr) {
  let text = arr.reduce((sum, cv, i) => {
    // console.log(i, sum);
    return `${i == 1 ? sum.name : sum}, ${cv.name}`;
  });

  return text;
}

// console.log(showListOfFilms(films));

function setFilmsIds(arr) {
  return arr.map((v, i) => {
    v.id = i;
    return v;
  });
}

// console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((v) => 'id' in v);
}

// console.log(checkFilms(films));
