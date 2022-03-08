// let add = function(x,y) {
//     return x + y
// }

// console.log(add(10,20))

// fat arrow (=>) is an alternative to write js function.
// these three are the same.

var add = (x,y) => {
    return x + y
}

var add = (x,y) => x+y

var add = (x,y) => {return x+y}

console.log(add(10,30))

// sort an array
// let numbers = [1,2,8,6]
// numbers.sort((a,b) => b-a)
// console.log(numbers)

// Takes single parameter
let names = ['scott', 'adam', 'tuan']
console.log(names[0].length)

let length = names.map(name => name.length)

console.log(length)

// with no parameter
let logDocument = () => console.log(window.document)
logDocument()

 
// Line Breaks, if the line breaks before '=>', that will not work anymore.
// let multiply = (x,y) 
// => x*y
// But the valid syntax is
let multiply = (x,y) =>
x*y
console.log(multiply(2,3))


// If we need to return an object in a single line
let setColor = color => ({value: color})
console.log(setColor('blue'))

