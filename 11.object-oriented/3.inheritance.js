function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
}

function Student(age) {
    this.age = age
}

// Inherit the properties from parent Person to Student
Student.prototype = new Person('Shibayan', 'Mondal')

Student.prototype.getAge = function() {
    return this.age
}
var st1 = new Student(24)
console.log(st1)