
const numbers = [1,2,3,4,5];

const multiplication = numbers.reduce((total,num) =>  total* num, 1);
console.log(multiplication);