const userName = 'Jim Halpert';
const userAge = 45;
const userHasHobby = true;

function summarizeUser(userName, userAge, userHasHobby){
    return 'Name is '+userName+' and his age is '+userAge+' and he has hobby'+userHasHobby;
};

//annonymous function
const summarizeUser1 = function(userName, userAge, userHasHobby){
    return 'Name is '+userName+' and his age is '+userAge+' and he has hobby'+userHasHobby;
}

//arrow function
const summarizeUser2 = (userName, userAge, userHasHobby) => {
    return 'Name is '+userName+' and his age is '+userAge+' and he has hobby'+userHasHobby;
}

const addNum = (a,b) => {
    return a+b;
};

const add2 = (a,b) => a+b;
console.log(add2(10,20));