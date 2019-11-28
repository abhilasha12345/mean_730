const fs=require('fs')
console.log("Before file operation")

var status=fs.existsSync("data.txt")
if(status)
    console.log("file exists")
else
    console.log("file not found")

console.log("After file operation")

