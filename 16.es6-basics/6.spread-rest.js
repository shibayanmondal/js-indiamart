/*
* ? spread operator: ... - upacks the elements of the array
* ? rest operator: ... - packs the elements into array
*/

const add = [1,3,5]
const combined = [2,4,6,...add] // spread: unpacking the elements 
console.log(combined)

// Rest has to be placed at the last but spread can be anywhere in the array
function display(a,b,...arguments) {
    console.log(arguments)
}
display(1,2,3,4,5,6)

// Constructing an array literal
let initialChars = ['A','B']
let chars = [...initialChars,'C','D']
console.log(chars)

