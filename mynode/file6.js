const fs=require('fs')
console.log("Before file operation")

/*var stat=fs.statSync("data.txt")
console.log(stat)*/

fs.stat("data.txt",(err,stat)=>{
  if(err)
     console.log(err)
  else
     console.log(stat)   

})

console.log("After file operation")

