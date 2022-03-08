var message = 'Hello ' +
'How are you?'

// Backtick (`) will respect line break and multiline string
let str = `Template 
literal in ES6`
console.log(str)

let firstName = 'Scott', lastName = 'Desatnick'
console.log("firstName is %s and lastName is %s",firstName,lastName)

// Dynamic substitution
let greeting = `firstName is ${firstName} and lastName is ${lastName}`
console.log(greeting)
