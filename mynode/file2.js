const fs=require('fs')
console.log("Before file operation")

fs.readFile("data.txt",(err,data)=>{
    if(err)
        console.log(err)
    else
        console.log(data.toString())    
})

console.log("After file operation")

