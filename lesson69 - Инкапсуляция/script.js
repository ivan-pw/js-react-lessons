'use strict';

class User {
  constructor(name, age) {
    this.name = name; // доступен снаружи
    this._age = age; // недоступен снаружи
  }

  #surname = 'Familiya'; // не в стандарте


  say = () => {
    console.log(`Имя пользователя: ${this.name} ${this.surname}, возраст: ${this._age}`);
  }

  get age() { 
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение');
    }
  }
}

const ivan = new User('Ivan', 31);

// console.log(ivan.name);
// console.log(ivan.userAge); // undefined

// ivan.userAge = 30;
// ivan.name = 'Alex';


// console.log(ivan.getAge());
// ivan.setAge(30);
// ivan.setAge(3000); // Недопустимое значение
// console.log(ivan.getAge());

// console.log(ivan.name);
// console.log(ivan.userAge);


console.log(ivan.age);
ivan.age = 99;

console.log(ivan.age);
console.log(ivan.surname); //undefined

ivan.say();
