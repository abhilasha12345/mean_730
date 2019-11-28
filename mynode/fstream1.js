const fs=require('fs')
console.log("Before stream works")

const readStream=fs.createReadStream("data1.txt")

var content=""
readStream.on("data",(chunk)=>{
   content+=chunk 
})

readStream.on("end",()=>{
    console.log(content) 
})

readStream.on("error",(err)=>{
    console.log(err)
})


console.log("After stream works")
