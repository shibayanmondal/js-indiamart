// 3 types of functions.
// 1. Regular function
function display(){
    console.log('Hello')
}

display()

function getName() {
    return 'Scott'
}

var fullName = getName()
console.log(fullName)

function getValue() {
    console.log(10)
}

console.log(getValue())

function test() {
        return
}

// var obj = {
//     a:1
// }
// returns {a:1}
function one() {
    return {
        a:1
    }
}
// the position of curly brace is not after return, so undefined
function two() {
    return 
    {
        a:1
    }
}

console.log(one())
console.log(two())

// No overloading concept, the latest function will get called
function getFullName() {
    return 'f' + 'f'  
}

function getFullName(firstName, lastName) {
    return firstName + lastName 
}

console.log(getFullName())

function dispFName(firstname, lastname) {
    return firstname + lastname
}

console.log(dispFName('s', 'd'))
console.log(dispFName('s', 'd'))
// undefined undefined
console.log(dispFName())

// output: boyundefined
console.log(dispFName('boy'))
// Does not matter how many parameters are passed
// it will pass first parameters according to definition
// of the function and rest will be ignored
console.log(dispFName('ff','ff','poi'))
// -----------------------------------------------------------------------------






// -----------------------------------------------------------------------------
// 2.Anonymous function
// Will not have any function name, it is declared
// as follows

// The latest declaration of variable is set for output
var add = 1
var add = function(a,b) {
    return a+b
}

console.log(add(2,3), typeof add) // add will be as per line no 81

console.log(getFN) // undefined as getFN is a variable to function

// Will throw an error as it is a variable to function
// and it is declared afterwards.
// console.log(getFN('5','b'))

var getFN = function(fN,lN) {
    return fN + lN;
}
console.log(getFN('5','b'))

var test = function mult(a,b) {
    return a*b
}
console.log(test(3,4)) // output: 12

// Will throw an error when calling this
// // console.log(mult(3,4))   // it is not a valid syntax
// // -----------------------------------------------------------------------------









// -----------------------------------------------------------------------------
// 3.Immediately Invoked Function
(function() {
    console.log('This IIF will be invoked immediately')
})();

/* Prototyle of IIF
(function() {

})() */

// when having two immediate function, the previous one needs to have
// semicolon at the end, see line no 124

(function(a,b) {
    console.log(a+b)
})(1,2);

// The function name would be total, not myFunc. myFunc will be ignored
var total = (function myFunc(a,b) {
    return a+b
})(34,5)
console.log(total)

