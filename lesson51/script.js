'use strict';

const persone = {
  name: 'Alex',
  tel: '+79000000000',
  parents: {
    mom: 'Olga',
    dad: 'Mike',
  },
};

// const clone = JSON.parse(JSON.stringify(persone));
console.log(clone);

clone.parents.mom='Ann';

console.log(persone);
console.log(clone);
