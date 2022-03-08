// Syntax
try {
    // Code that may or may not throw errors
} catch(ex) {
    //  Code to be executed if an error occurs
} finally {
    // Code to be executed regardless of an error
    // It is used for:
    // Code Clean Up
    // Close DB Connections
    // close Network Connections
    // Close File Connections
}


// try {
//     var output = getMessage('Hello', 'Uma')
// } catch(error) {
//     // error object have 'name' and 'message' properties.
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error)
// } finally {
//     console.log('This code will be executed always')
// }

// try {
//     // Throwing errors is costly.
//     throw 'Error Occured'   
// } catch(ex) {
//     console.log(ex)
// }

// Use case of throw.
// Trying to get the student with Id, what if we get two
// students. It is a logical error.
try {
    var studentCount = 2    // assume this value comes from db
    if (studentCount > 1)
        throw {
            Id: 101,
            message: 'There are duplicate records for this id'

        }
} catch(ex) {
    console.log(ex)
}