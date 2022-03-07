var students = new Array()
// Index of array starts with zero
students[0] = "Scott"
students[1] = "Harry"
students[2] = "Adam"

console.log(students)

console.log(students[0])

console.log(students.length)


// 2nd way to define an array
var people = new Array(100)   // It just sets the length, not allocating memory
people[0] = 'A'
console.log(people)
console.log(people.length)



// 3rd way to define an array
var customers = new Array('A', 'B','C')
customers[3] = 1
console.log(customers)
