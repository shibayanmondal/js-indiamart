class Shape {
    constructor() {

    }

    draw() {
        return 'I am a generic shape'
    }
}

class Circle extends Shape {
    constructor() {
        super() // it is mandatory to call parent constructor using super()
    }
    draw() {
        return 'I am a circle'
    }
}

let circle = new Circle()
console.log(circle.draw())
