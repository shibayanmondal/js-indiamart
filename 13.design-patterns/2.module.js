// // Private Method
// // Return
// var Module = (function() {
    
//     var privateMethod = function() {

//     }

//     var publicMethod = function() {

//     }

//     return {
//         publicMethod: publicMethod
//     }

// })()

// console.log(Module)


// Other way
// var Module = (function(){

//     var privateMethod = function() {


//     }

//     return {
//         publicMethod: function() {

//         }
//     }

// })()

// console.log(Module)


// -------------------------------------------------------
// Anonymous object literal
// var Module = (function(){

//     var privateMethod = function() {


//     }

//     return {
//         publicMethodOne: function() {
//             return 'publ method 1'
//         },
//         publicMethodTwo: function() {
//             return 'pulb method 2'
//         }
//     }

// })()

// console.log(Module)



// ------------------------------------------------------
// Locally Scoped Object Literal
// var Module = (function(){

//     var myObj = {
//         publicMethod1: function() {

//         },
//         publicMethod2: function() {

//         }
//     }

//     var privateMethod = function() {


//     }

//     return myObj

// })()

// console.log(Module)



// ---------------------------------------------------------
// // Revealing Module Pattern
// var Module = (function() {
//     var privateMethod = function() {

//     }

//     var someMethod = function() {

        
//     }

//     return {
//         some: someMethod,
//         another: privateMethod
//     }


// })()

// console.log(Module)



// -----------------------------------------------------------
// Accessing private method
var Module = (function() {

    var privateMethod = function(msg) {
        console.log(msg)
    }
    
    var publicMethod = function(txt) {
        privateMethod(txt)
    }

    return {publicMethod}

})

Module.publicMethod('I am able to access the private method')