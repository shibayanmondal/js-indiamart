function One() {
    return function two() {
        return function three() {
            return "Welcome to nested fun"
        }
    }
}

// invokes function One
console.log(One())
// to invoke the function two inside function One()
console.log(One()())
// invokes function three
console.log(One()()())