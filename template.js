// this is the boring way to do this and old too not in es6
const name1 = "Muhammad";
const name2 = "Rahatul";
const name3 = "Islam";
const fullName = name1 + " " + name2 + " " + name3;
console.log(fullName);


// this is the best way to do this using es6
const firstName = "Muhammad";
const middleName = "Rahatul";
const lastName = "Islam";
const fullName2 = `${firstName} ${middleName} ${lastName} ${20+33+30} is a good boy`;
console.log(fullName2);

// this is the old way and boring.
const multiLine = "My name is Rahatul Islam \n" +
    "I live in Bangladesh";
console.log(multiLine);

// multiline using es6
const multiLine = `my name is Rahatul Islam. I live in Satkhira, Bangladesh`;
console.log(multiLine);