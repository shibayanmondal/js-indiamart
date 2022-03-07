// convention: start with capital letter. It is a constructor function
function Student() {
    this.firstName = 'Shibayan'
    this.lastName = 'Mondal'
    this.getFullName = function() {
        return this.firstName +' '+this.lastName
    }
}

//var studentObj = Student()    // undefined, without new keyword it behaves as function
var studentObj = new Student()  // will create an object
console.log(studentObj)
console.log(studentObj.firstName)
console.log(studentObj.lastName)
console.log(studentObj.getFullName())

// --------------------------------------------------------------------------------
