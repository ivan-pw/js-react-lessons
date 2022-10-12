const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  let plus = data.filter((v) => v.amount > 0);
  //   console.log(plus);
  let sum = plus.reduce((sum, curr) => {
    // console.log(sum);
    // console.log(typeof sum);
    return (typeof sum == 'object' ? +sum.amount : +sum) + +curr.amount;
  });

  return sum;
};

// console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  // console.log(data.some((v) => v.amount < 0));

  if (data.some((v) => v.amount < 0)) {
    return data.reduce((sum, current) => {
      return (typeof sum == 'object' ? +sum.amount : +sum) + +current.amount;
    });
  } else {
    return getPositiveIncomeAmount(data);
  }
};

console.log(getTotalIncomeAmount(funds));
