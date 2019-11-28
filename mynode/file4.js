const fs=require('fs')
console.log("Before file operation")

fs.exists("data1.txt",(status)=>{
   if(status)
      console.log("file exists")
   else
      console.log("file not found")      
})

console.log("After file operation")

