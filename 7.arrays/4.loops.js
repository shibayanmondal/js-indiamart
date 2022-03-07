var names = ['scott','adam','tuan']

// for loop
for (var i = 0; i < names.length; i++) {
console.log(names[i])
}





// -----------------------------------------------------------
// forEach is a callback function which passes the elements
// of the array in order. For that, the pass through anonymous
// function should have atleast one parameter to hold the
// value of the elements.
names.forEach(function(name, index) {
    console.log(index, name)
})


// map
names.map(function(value, index) {
    console.log(index, value)
})


// why are both existed at the same time? what's the difference?
var customers = ['scott', 'juan', 'adam']

var customerListOne = customers.forEach(function(val, ind) {
                        return val + ' ' + ind
                    })

// map function returns an array of the outputs to the variable.
// this is the main difference.
// if we want to modify the existing array and get the output
// of the whole in a variable, we need to use map.
var customerListTwo = customers.map(function(val, ind) {
                        // return val + ' ' + ind
                        return {id: ind, name: val}
                    })

console.log(customerListOne)
console.log(customerListTwo)



// -----------------------------------------------------------
var prod = ['desktop','ipad','mobile','laptop']

// for in : returns the indices of an array
for (var index in prod) {
    console.log(index)
}

// for of : return the items of an array
for (var item of prod) {
    console.log(item)
}

// for of and in

console.log(Object.entries(prod))

for (var [ind, item] of Object.entries(prod)) {
    console.log(ind,item)
}

