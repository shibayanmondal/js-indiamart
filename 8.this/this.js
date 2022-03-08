console.log(this)

function sample() {
    console.log(this)
}

sample()    // same as line 1. As function is global

var obj = {
    name: 'scott',
    sample: function() {
        var self = this     // as js confuses this as global variable 
                            // in the inner function, this is stored in another var.
                            
        console.log(self)   // outputs: name: scott
        self.name = "great scott"
        console.log(self)   // outputs: name: great scott
        var updateName = function() {
            self.name = 'shibayan' 
            console.log(self)   // outputs: name: shibayan. if it were not another
                                // variable self, this will not work and will point
                                // out the global variable

            var test = function() {
                console.log(self)   // this is where js looses focus and 
                                    // this will point out to global Window here while it should
                                    // show name: shibayan.
                                    // to offset this issue, store this to an other variable. 
                                    // see line no 12.
            }
            test()
            // another way to solve global issue of 'this' keyword
            // test.bind(this)()
        }
        updateName()
        // another way to solve global issue of 'this' keyword
        // updateName.bind(this)()
    }
}
// sample()
obj.sample()    // this is pointing to an instance of object 'obj'


// -----------------------------------------------------------
// function disp() {
//     var hello = function() {
//         console.log('hello')
//     }
//     hello()
// }

// console.log(disp())