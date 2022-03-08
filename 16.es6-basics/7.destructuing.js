// breaking down a complex structure
// Array
let arr = ['scott', 'adam', 'tuan']

let [name1, name2, name3] = arr

console.log(name1)  // arr[0]
console.log(name2)  // arr[1]
console.log(name3)  // arr[2]

let [firstName, lastName] = 'Scott Desatnick'.split((' '))
console.log(firstName)
console.log(lastName)

let [fname, , title] = ['Scott', 'Desatnick', 'Great Boss']
console.log(fname)
console.log(title)


// Object
let user = {
    fullname: 'Scott Desatnick',
    city: 'Boston',
    age: 45
}

let {fullname, city,age} = user
console.log(fullname)
console.log(city)
console.log(age)