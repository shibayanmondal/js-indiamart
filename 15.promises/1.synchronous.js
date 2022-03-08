// Executing the code line by line is synchronous.
// But for the below code, line no 4 and 8 will execute before 5,6,7
//  As the timer is set. It is asynchronous.

console.log('one')
setTimeout(function() {
    console.log('two')
}, 3000)
console.log('three')