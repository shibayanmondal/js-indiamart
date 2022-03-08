var person = {
    firstName: 'scott',
    lastName: 'desatnick',
    city: 'boston',
    age: 45,
    address: {
        state: 'WB',
        country: 'IN'
    }
}

person.email = 'scott@gmail.com'    // CREATE
person.city = 'bengaluru'           // UPDATE
delete person.age                   // DELETE
console.log(person)                 // READ

// How to restrict those access?
// Object.preventExtensions()
// prevents CREATE but allows UPDATE and DELETE
Object.preventExtensions(person)
person.gender = 'male'          // CREATE
person.city = 'mumbai'          // UPDATE
delete person.lastName          // DELETE
console.log(person)             // READ

// Object.seal()
// prevents CREATE and DELETE but allows UPDATE
Object.seal(person)
person.mobile = 567483          // CREATE
person.city = 'chennai'         // UPDATE
delete person.firstName         // DELETE
console.log(person)             // READ


// Object.freeze()
// prevents CREATE, DELETE and UPDATE
Object.freeze(person)
person.phone = 567483           // CREATE
person.city = 'delhi'           // UPDATE
delete person.firstName         // DELETE
console.log(person)             // READ


// In case of nested objects like 'address' inside 
// 'person', we need to explicitly mention for that.
Object.freeze(person.address)

var personStringify = JSON.stringify(person)

// This parse will return an exact copy of person object
// freeze property will not be there as it is a new copy
var personParse = JSON.parse(personStringify)

personParse.city = 'delhi'  // Successfully changed the city to 'delhi'
console.log(personParse)
