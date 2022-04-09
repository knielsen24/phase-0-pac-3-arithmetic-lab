/*
var a, b;

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
*/
var a = 10;
var b = 10;
var parNum = "2.223as";

console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
console.log(increment(a));
console.log(decrement(b));
console.log(makeInt(parNum));
console.log(preserveDecimal(parNum));

function preserveDecimal(x) {
    return parseFloat(x);
}

function makeInt(x) {
    return parseInt(x, 10);
}

function decrement(x) {
    x--;
    return x;
}

function increment(x) {
    x++;
    return x;
}

function divide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}
function subtract(x, y) {
    return x - y;
}

function add (x, y) {
    return x + y;
}
