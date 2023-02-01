//array
const hobbies = ['Cricket','football'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby:'+hobby));
hobbies.push('Basketball');
// console.log(hobbies.map(hobby => 'Hobby:'+hobby));
const newArray = hobbies.slice();
// console.log(newArray.map(hobby => 'Hobby:'+hobby));

const person = {
    myName: 'Michael Scott',
    age: 45,
    greet(){
        return 'Hello '+this.myName;
    }
};

const copiedArray = ['badminton',...hobbies];
// console.log(copiedArray.map(hobby => hobby));

//rest operator
const arrArgs = (arg1,arg2,arg3) => {
    return [arg1,arg2,arg3];
};

// console.log(arrArgs(1,2,3));

const arrArgs2 = (...args) => {
    return args;
};
const arrArgs3 = (...args) => args;

console.log(arrArgs2(1,2,3,4,5,6));
console.log(arrArgs3(1,2,3,4,5,6,7,8));