// normal way
function multiply(num) {
    return num * 3;
}
const total = multiply(4);
console.log(total);

// using arrow function in es6
const multiply = num => num * 3;
const total = multiply(3);
console.log(total);

// multi parameter arrow function in es6
const multiply = (x, y) => {
    const sum = x + y;
    const difference = x - y;
    const total = sum + difference;
    return total;
}
const total1 = multiply(5, 4);
console.log(total1);