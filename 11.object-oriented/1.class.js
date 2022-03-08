// ? class
function Student() {
    
}


// ? Instance
function Person() {

}

var person1 = new Person()  // person1 is an instance
var person2 = new Person()  // person2 is an instance


// ? constructor
function Order() {
    console.log('Order is initiated')
}

var order1 = new Order()    // Order() is the constructor


// ? property
function Customer(gender) {
    this.gender = gender    // this is a property
}

var customer1 = new Customer('male')
var customer2 = new Customer('female')

console.log(customer1)
console.log(customer2)

