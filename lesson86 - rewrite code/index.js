const employers = [
  'Alex',
  '',
  'ludmila',
  'Viktor',
  '',
  'oleg',
  'iNna',
  'Ivan',
  'Alex',
  'Olga',
  ' Ann',
];

const employersNames = employers.filter((v, i)=> {
  return employers[i].length > 0 && employers[i].length != '';
}).map((v, i)=> v.toLowerCase().trim());

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
};

const {cash, eu, rus} = sponsors;

const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

const calcCash = (cash = 0)=>{
  return cash.reduce((a, b)=> a+b);
};

const money = calcCash(cash);

const makeBusiness = ({owner = 'Sam', director = 'Victor', cash, emp}) => {
  console.log(`We have a business. Owner: ${owner}, director: ${director}. \nOur budget: ${cash}. And our employers: ${emp} \nAnd we have a sponsors: ${sumSponsors} \nNote. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
};

makeBusiness({
  cash: money,
  emp: employersNames,
});
