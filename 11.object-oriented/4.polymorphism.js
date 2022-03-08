// ? Polymorphism - function existing in several forms 
// Function overloading is not possible in javascript
// Function overriding is possible

// Shape - parent class
function Shape() {

}

Shape.prototype.draw = function() {
    return 'I am a generic shape'
}


// Circle - child class
function Circle() {

}
// Inheriting the class Shape
Circle.prototype = new Shape()
// Overriding the method 'draw' of parent class 'Shape'
Circle.prototype.draw = function() {
    return 'I am a circle'
}

var shape1 = new Shape()
console.log(shape1.draw())

var circle1 = new Circle()
console.log(circle1.draw())


// creating object in an array
var shapes = [new Shape(), new Circle()]

shapes.forEach(function(shape) {
    console.log(shape.draw())
})