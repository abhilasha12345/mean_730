//Asynchronous callback function
console.log("Before function execution")

function add(a,b,cb)
{
    var c
    c=a+b    
    console.log("Add function executed")
    setTimeout(()=>{
      cb(c)  
    },2000)
}

var a,b
a=10
b=20
add(a,b,(result)=>{
    console.log("Add ="+result)
})

console.log("After function execution")