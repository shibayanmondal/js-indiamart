var person1 = {name: 'scott', skill: 'great boss'}
var person2 = {name: 'adam', skill: 'business'}
var person3 = {name: 'tuan', skill: 'tech boss'}

function disp() {
    // console.log(this)
    return this.name + ' ' + this.skill
}

// Bind
// Any function will have bing, apply and call after . operator
// bind will bind this to some local var or local object
// basically bind function sets 'this' value and
// pass the binded function to another variable as a function
var dispUsingBing = disp.bind(person1)

console.log(dispUsingBing())




// Call
// it also sets 'this'.
// it is executing the function immediately and returns the 
// value to the variable.
var displayUsingCall = disp.call(person2)
console.log(displayUsingCall)





// Apply
// similar to Call but with different representation
var displayUsingApply = disp.apply(person3)
console.log(displayUsingApply)