const person = {
    Name: 'Jim Halpert',
    age: 40,
    greet(){
        return 'Name: '+this.Name;
    }
};

const hobbies = ['Cricket', 'football', 'hockey'];
//spread operator
const personCopy = {...person};
// console.log(personCopy);


//destructuring: extract value from Object
const {Name, age} = person;
// console.log(Name,age);

const [cricket, hobby2, hobby3] = hobbies;
// console.log(hobby1, hobby2, hobby3);


// ------------------------------------------
//Asynchronous code

// console.log('Hello');

// setTimeout(() => {
//     console.log('Time is done!');
// }, 2000);

// console.log('Hi');

const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done!');
    }, 2000);
};


setTimeout(() => {
    console.log('Timer is done!');
    fetchData(param => {
        console.log(param);
    });
}, 3000);

console.log('Hello');
console.log('Hi');