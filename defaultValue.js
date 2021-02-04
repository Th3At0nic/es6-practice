// this is the normal way
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(20, 40);
console.log(sum);

// this is another old way to do this math
function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
const sum = add(20, 10);
console.log(sum);

// this is the latest way to do using es6 and this is called default value.
function add(num1, num2 = 0) {
    return num1 + num2;
}
const sum = add(30, 10);
console.log(sum);