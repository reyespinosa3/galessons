//my-module.js
var number = 7
module.exports.name = "Kendrick"
module.exports.arr = [1, 2, 3]
module.exports.getNumber = function(){
    console.log("Get number called. Returning: ", number)
    return number
}

console.log("End of my-module.js file");

// above code is the same as below
// module.exports {
//     name: "Kendrick",
//     arr: [1, 2, 3],
//     getNumber = function(){
//         console.log("Get number called. Returning: ", number)
//         return number
// }
