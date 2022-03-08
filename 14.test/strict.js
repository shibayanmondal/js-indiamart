// use strict : react js runs in strict mode. This is how using 'this'
// inside function will denote the local object to it.
// strict will also restrict the access of a variable if it is not
// declared before.

'use strict'
console.log(this)

function sample() {
    console.log(this)
}

sample()    