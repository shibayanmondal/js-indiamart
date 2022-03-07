// Concat: Concatenating two arrays
var fruits = ['apples', 'oranges', 'guava', 'banana']
var veg = ['potato', 'tomato', 'egg plant', 'drumstick']

var mixOne = fruits.concat(veg)
var mixTwo = veg.concat(fruits)

console.log(mixOne)
console.log(mixTwo)


// -----------------------------------------------------------
// Join: Array into a string
var movies = ['avatar', 'good will hunting', 'vanilla sky', 'mars']
var moviesStr = movies.join(', ')

console.log(moviesStr)



// -----------------------------------------------------------
// split: String a string into an array
var fullName = 'Shibayan Mondal'
var nameArr = fullName.split(' ')

console.log(nameArr)



// -----------------------------------------------------------
// push, pop, unshift, shift
var numbers = [1,2,3,4]

numbers.push(5)

console.log(numbers)
console.log(numbers.pop())
console.log(numbers)

numbers.unshift(-1)     // will add values at the beginning
numbers.unshift(-2)     // will add values at the beginning
console.log(numbers)

numbers.shift() // delete the values from the beginning
console.log(numbers)



// -----------------------------------------------------------
// splice(): adds or removes array elements
var arr = ['a','b','c']

arr.splice(1,0,'d', 'e') // Insertion. splice(index, 0, elements)
// 0 for removing 0 element
console.log(arr)

// Remove elements
// 1 element at index 1
arr.splice(1,1)
console.log(arr)

// Remove two elements at index 0
arr.splice(0,2)
console.log(arr)




// -----------------------------------------------------------
// slice(): returns selected elements in an array as a new array. 
// It selects elements upto the end, but does  not include it.
// does not alter the original array.
var city = ['kolkata', 'delhi', 'mumbai', 'chennai']
var slicedCity = city.slice(-3,-1)
console.log(slicedCity)
