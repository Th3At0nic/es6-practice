const ages = [23, 24, 22, 25, 32, 33, 21, 35];
const ages2 = [21, 55, 33, 52, 12, 23, 44, 44];
const ages3 = [3, 5, 2, 21, 22, 23];
const allAges = ages.concat(ages2).concat([0]).concat(ages3);
// console.log(allAges);

// using three dots in es6
const allAges2 = [...ages, ...ages2, 0, ...ages3];
// console.log(allAges2);

const business = 330;
const minister = 440;
const sochib = 660;
const taka = [330, 440, 660];
const bigger = Math.max(...taka);
console.log(bigger);