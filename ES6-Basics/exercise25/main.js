

console.log("------this is spread ex");

let numbers = [1,2,3];
let allNumbers = [...numbers, 4,5,6];
console.log(allNumbers);

console.log("-----this is Rest operstor ex");

function mult(...numbers){
    return numbers.reduce((total, num) => total * num,1);
}

console.log(mult(2,3,4));



