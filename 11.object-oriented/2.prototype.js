function Student() {
    this.name = 'John'
    this.gender = 'Male'
}
// Prototype is an 'Object'
// To add property with all the instances
// prototype helps to add new properties and methods to the class, it extends actually
Student.prototype.address = 'IN'


var stuObj1 = new Student()
stuObj1.age = 35    // 'age' property is only for stuObj1, not for others instances
console.log(stuObj1)
console.log(stuObj2)

var stuObj2 = new Student()
console.log(stuObj2) // new property 'age' is exclusive to stuObj1.

// How to add new property to all the objects afterwards
// Student.prototype.age
// every function attaches prototype 'Object' by default.

// Prototype is only for parent, not for instances
console.log(Student.prototype)
console.log(stuObj1.prototype)

// This is actually the prototype of class which can be accessed
// through instances
console.log(stuObj1.__proto__)
// this is same as
// console.log(Student.prototype)

// '===' returns true only when both value and type are matched.
console.log(Student.prototype === stuObj1.__proto__)





// -------------------------------------------------------------------------------------------------
function Customer(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function() {
    //     return this.firstName + ' ' + this.lastName
    // }
}

// with the creation of every instace, getFullName method 
// copy will be created for this.getFullName = function()
// So it creates redundancy and this is to be avoided.'
// For that the function needs to be declared as follows:
Customer.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
}

var cust1 = new Customer('Shibayan', 'Mondal')
var cust2 = new Customer('Scott','Colson')
console.log(cust1.getFullName())