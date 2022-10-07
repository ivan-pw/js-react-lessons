// "use strict";

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 2000 }];

let budget = [5000, 15000, 25000];

const map = new Map();

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

console.log(map);

console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
// .delete
// .clear
// .size
// .keys
// .values

// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

// console.log(map);

const goods = [];

for (let shop of map.keys()) {
  goods.push(Object.keys(shop));
}

// console.log(goods);

for (let [shop, price] of map.entries()) {
  console.log(price, shop);
}
