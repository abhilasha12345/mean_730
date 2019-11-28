const fs=require('fs')
console.log("Before stream works")

const writeStream=fs.createWriteStream("data1.txt")
var data="this is file stream implementation and we are working on file"
writeStream.write(data)
writeStream.end()

writeStream.on("finish",()=>{
    console.log("Content added successfully in file")
})

writeStream.on("error",(err)=>{
    console.log(err)
})


console.log("After stream works")
