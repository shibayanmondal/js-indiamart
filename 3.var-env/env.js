function b() {
    var x
}

function a() {
    var x = 2
    b()
}
var x = 1
console.log(x)
a()
console.log(x)


var c = 7
function d() {
    c = 8
}
d()
console.log(c)