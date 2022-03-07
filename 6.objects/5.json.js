var regularObj = {
    userId: 1,
    id: 1,
    title: 'random text',
    completed: false
}

// every keys should be in double quotation
// single quote is not allowed anywhere.
var JSONobj = {
    "userId": 1,
    "id": 1,
    "title": "random text",
    "completed": false
}

// They both will look the same in Js console.
console.log(regularObj)
console.log(JSONobj)

 // Stringify for serialization
 var JSONStringify = JSON.stringify(JSONobj)
 console.log(JSONStringify, typeof JSONStringify)

 // JSON.parse. Get back object from stringification
 var JSONParse = JSON.parse(JSONStringify)
 console.log(JSONParse, typeof JSONParse)

