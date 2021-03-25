console.log('objects')

// objects are unordered, keyed collections of any various values

const empyObj = {};

// property, value / key value
let objStructure = {
    key1: 'value1',
    key2: 'value2'
}

const dog = {
    firstName: 'Rufus',
    age: 4,
    email: 'rufus@gmail.com',
    hobbies: ['chess', 'reading'],
    address: {
        street: 'Lobeckstr.',
        city: 'Berlin'
    }
}
// accessing a value
// dot notation
console.log(dog.age)
// accessing a nested value -> chess
console.log(dog.hobbies[0])
console.log(dog.address.street)

// changing a value
dog.age = 5;
// add a value
// dog.hobby = 'eating';
console.log(dog)

// accessing a prop using a variable -> you have to use the braket notation
const input = prompt('which property of the dog you wanna see?')
console.log('this is the prop you requested: ', dog[input])



// deleting a property
delete dog.age;
console.log(dog)

// checking if a property exists
// prop in object
console.log('age' in dog)
if ('email' in dog) {
    console.log(dog.email)
}

console.clear();


/*
const dog = {
    firstName: 'Rufus',
    age: 4,
    email: 'rufus@gmail.com',
    hobbies: ['chess', 'reading'],
    address: {
        street: 'Lobeckstr.',
        city: 'Berlin'
    }
}
*/

// looping over an object
// for in loop
for (let prop in dog) {
    console.log('the key is: ', prop)
    console.log('the value is: ', dog[prop])
}


// getting an array with all the keys
// console.log(Object.keys(dog));

// const keys = Object.keys(dog);
// for (let i = 0; i < keys.length; i++) {
//     console.log(dog[keys[i]]);
// }

// using forEach()
// Object.keys(dog).forEach(function (key) {
//     console.log(dog[key])
// })

// getting an array with all the values
// console.log(Object.values(dog));


console.log(Object.entries(dog))

console.clear();

const persons = [
    {
        name: 'mary',
        age: 23
    },
    {
        name: 'bob',
        age: 32,
    },
    {
        name: 'alice',
        age: 27
    }
];

// iterate over persons and log every name
for (let person of persons) {
    console.log(person.name)
} 
