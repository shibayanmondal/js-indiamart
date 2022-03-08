// console.log('one')
// setTimeout(function() {
//     console.log('two')
// }, 3000)
// console.log('three')

// promise is an predefined class in js.
function printInOrder() {

    return new Promise(function(resolve,reject) {
        var count = 5
        if (count>4) {
            setTimeout(function() {
                resolve('Two')
            }, 3000)
            resolve('Two')
        } else {
            reject('Your promise has failed')
        }
    })
}

console.log('One')

// If a function has promise, then we have to use only '.then' to use it.
printInOrder()
.then(function(data) {
    console.log(data)
    console.log('Three')
    return 'This will go to second then'
})
.then(function(data) {
    console.log(data)
})
.catch(function(data) {
    console.log(data)
})