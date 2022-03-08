// ES5
function say(message) {
    // console.log(message)
    message = typeof message !== 'undefined' ? message: 'Hi'
    console.log(message)
}

say()

// ES6
function another(msg = 'Hello') {
    console.log(msg)

}
another('Hey')