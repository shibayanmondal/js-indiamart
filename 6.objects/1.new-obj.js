var person = new Object()
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