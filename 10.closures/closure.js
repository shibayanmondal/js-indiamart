function sayHello(msg, city) {
    return function(name) {
        return msg + ' ' + name + ' to ' + city
    }
}

// Here Welcome is not displayed in inner function.
// In the Execution context, the msg = 'welcome' is sitting
// in memory but not displayed. It will be displayed only
// when all the parameters of the inner functions will be
// declared. This is the meaning of closure.
var onlyWelcome = sayHello('welcome', 'boston')
console.log(onlyWelcome)

var sayHello = onlyWelcome('shibayan')
console.log(sayHello)