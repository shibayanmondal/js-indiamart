var person = {} // Object Literal Syntax, this is 
// the most preferred way to create an object
// instead of "new Object()"


// here the commma is not mandatory after 'Scott'
person['firstname'] = 'Scott',
person['lastname'] = 'Desatnick'

var cityName = 'city'
person[cityName] = 'Delhi'

console.log(person)
console.log(person['firstname'])
console.log(person[cityName])
// another way of calling attributes of an object
console.log(person.firstname)
console.log(person.cityName) // undefined

// Object inside an object, both are same
// The latest declaration will replace other same 
// declaration beforehand
person['address'] = new Object()
person.address = new Object()
console.log(person)

// Properties of an object
person.address.street = '1st Main'
person.address.state = 'Massacchsets'

person.getFullName = function(){
    return this.firstname + " " + this.lastname
}

console.log(person)
console.log(person.address.street)
console.log(person.getFullName())
// -----------------------------------------------------------------------------------



// This is the preferred way to create an object over 'new Object'
// id, firstname.... are the properties.
var student = {
    id: 1011,
    firstName: 'Shibayan',
    lastName: 'Mondal',
    isAdmin: true,
    details: null,
    branch: undefined,
    address: {
        state: 'WB',
        country: 'India'
    },
    getFullN: function() {
        return this.firstName + ' ' + this.lastName
    },
    subjects: ['Maths', 'DSA']
}

console.log(student)
console.log(student.getFullN())
console.log(student.subjects)