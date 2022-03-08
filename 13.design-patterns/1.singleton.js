// function DBConnection() {
//     console.log('Connection Created')
// }

// // we need to create several connections
// // we can do the below but it creates a problem.
// // people will access directly the class which can be tweaked
// // easily.
// var dbCon1 = new DBConnection()
// console.log(dbCon1)
// var dbCon2 = new DBConnection()
// console.log(dbCon2)
// var dbCon3 = new DBConnection()
// console.log(dbCon3)
// var dbCon4 = new DBConnection()
// console.log(dbCon4)

// To solve the above problem
// use singleton
var DBConnection = (function() {
    var connection = null

    var createInstance = function() {
        var obj = new Object()
        console.log('Connection is created')
        return obj
    }

    var getConnection = function() {
    if (!connection) {
        connection = createInstance()
        }
    return connection
    }

    var obj = {
        getConnection   // getConnection: getConnection
    }

    return obj
})()

// console.log(DBConnection)   // DBConnection is an object

// To create a connection
// It will create one connection for all the instances
var dbCon1 = DBConnection.getConnection()
console.log(dbCon1)

var dbCon2 = DBConnection.getConnection()
console.log(dbCon2)

var dbCon3 = DBConnection.getConnection()
console.log(dbCon3)