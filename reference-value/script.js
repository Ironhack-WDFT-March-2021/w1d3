// reference vs value
// primitives are passed by value, objects are passed by reference 
const beatles = ['John', 'Paul', 'George', 'Ringo'];

function prefix(input) {
    const copy = [...input];
    for (let i = 0; i < copy.length; i++) {
        copy[i] = 'Mr ' + copy[i];
    }
    return copy;
}

const prefixedBeatles = prefix(beatles);
console.log(prefixedBeatles);
console.log(beatles);

const user = 'anna';
let userCopy = user;
userCopy = 'ahmed';
console.log(userCopy);
console.log(user);

// to copy an array you can use slice() or the spread operator
// this creates a so called shallow copy -> this does not cover 
// complex data strucutres inside
// const copy = arr.slice();
// const copy = [...arr];

// for more complex structures use JSON.stringify() and JSON.parse()

const complexArray = [{ name: 'anna' }, { name: 'ahmed' }];
const compexCopy = JSON.parse(JSON.stringify(complexArray));


const arr1 = [2, 5];
const arr2 = [2, 5];
const user1 = 'anna';
const user2 = 'anna';
console.log(user1 === user2);
console.log(arr1 === arr2);
console.log([] === []);

// to compare two arrays we turn them into a string before comparison
// using JSON.stringify()
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));


const arr = [2, 3];
let arrCopy = arr;
arrCopy.push(5);
console.log(arrCopy);
console.log(arr);

const letters = ['a', 'b', 'c'];
const cp = [...letters];
console.log(cp)

console.clear();

const person = {
    name: 'joe'
}

// const copy = { ...person };
// you can alse use json parse and stringify to copy an obj
const copy = JSON.parse(JSON.stringify(person));
copy.age = 35;
console.log(copy)
console.log(person)

console.clear();
// bonus: another use case for the spread operator
const numbers = [3, 7, 2];
console.log(Math.max(...numbers))
