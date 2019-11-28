//synchronous callback function
console.log("Before function execution")

function demo(cb)
{
    console.log("Demo function execution")
    cb()
}

demo(()=>{
    console.log("Callback function invoked")
})

console.log("After function execution")