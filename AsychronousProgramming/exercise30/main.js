

function operate(a,b, callback){
    return callback(a,b);
}

function add(a,b){
    return a+b;
}

function subs(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}




console.log("Addition is: ", operate(10,10, add));
console.log("Substraction is: ", operate(5,3, subs));
console.log("Multiplication is: ", operate(3,3, multiply));
console.log("Division is: ", operate(10,5, division));