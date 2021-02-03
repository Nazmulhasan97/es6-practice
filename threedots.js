
const age = [12 , 16 , 10 , 15 , 20];
const age2 = [11 , 21 , 18 , 14 , 26 , 18];
const age3 = [22 , 21 , 28 , 24 , 26 , 18];
const allAges = age.concat(age2).concat(age3);
const allAges2 = [...age , ...age2 , 5 , ...age3]; //new feature for adding array element;

console.log(allAges2);
console.log(allAges);


const businessMan = 700;
const marketingMan = 450;
const ministerMan = 350;
const maximumMoney = [700 , 450 , 350]
const Maximum = Math.max(...maximumMoney);
console.log(Maximum);