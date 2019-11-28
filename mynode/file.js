const fs=require('fs')
console.log("Before file operation")

var content="this is my node fs module we are working on node application, this is file operations"

fs.writeFile("data.txt",content,(err)=>{
    if(err)
        console.log(err)
    else    
        console.log("Content added in file....")    
})

console.log("After file operation")