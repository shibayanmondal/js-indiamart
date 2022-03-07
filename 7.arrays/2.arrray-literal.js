var students = []   // Array literal syntax

students[0] = 'a'
students[1] = 'b'
students[2] = 'c'

console.log(students)


var data = ['s1', 's2', 's3', 's4']
data[4] = 's5'
console.log(data)

// Array can have any type of values
var types = [
    1, 2,
    'scott',
    null,
    undefined,
    {name: 'scott', gender: 'male'},
    ['red','green','blue'],
    function(name) {
        return name
    }
]

console.log(data)

// Get the function
// Invoke the function
// Pass the parameter to the function
// Pass name property of the object

// console.log(types[6](types[5].name))

