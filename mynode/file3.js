const fs=require('fs')
console.log("Before file operation")

var data=fs.readFileSync("data1.txt")
console.log(data.toString())

console.log("After file operation")

