

function add(a, b) {
    return a + b;
}

console.log("declaration function", add(1, 2));
console.log(add(4, 5));
console.log(add(6, 7));


const sum = function(a, b) {
    return a + b;
}

console.log("expression function", sum(8, 9));
console.log(sum(10, 11));
console.log(sum(12, 13));
