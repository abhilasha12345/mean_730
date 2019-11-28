const fs=require('fs')
console.log("Before file operation")

var content="this is my node fs module we are working on node application, this is file operations"

fs.writeFileSync("data.txt",content)
console.log("Content added in file successfully")

console.log("After file operation")

