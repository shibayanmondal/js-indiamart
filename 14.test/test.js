// var a =[1,2]
// var b = a
// a = [1,2,3] // new reference is created here

// console.log(a)
// console.log(b)

// b = a
// a.push(10)
// console.log(a)
// console.log(b)

// var output = (function(x){
//     console.log(delete x)
//     delete x    // it only works with objects, it does not del object, only property
//     return x
// })(2)

// console.log(output)

// var output = (function(x){
//     console.log(delete x)
//     delete x    // delete only dels the property
//     return x
// })({a:5})

// console.log(output)


// Conditional statement

var totalAmt = 70000
if(totalAmt > 500000) {
    console.log('Balance is huge')
} else if(totalAmt > 100000) {
    console.log('Balance is moderate')
} else {
    console.log('Balance is low')
}

var arr = ['a','b','c','d','e','f']

console.log()


// Mark and Sweep Algorithm
// First check if there is any references. They will be marked.

console.log(1=='1')

function extractExtenstion(fileName) {
    return fileName.split('.').length > 1 ? fileName.split('.')[1] : false
}

console.log(extractExtenstion('resume.doc'))
console.log(extractExtenstion('bangalore.txt'))
console.log(extractExtenstion('notepad'))

