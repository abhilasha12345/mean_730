//Asynchronous callback function
console.log("Before function execution")

function demo(cb)
{
    console.log("Demo function execution")
    setTimeout(cb,2000)
}

demo(()=>{
    console.log("Callback function invoked")
})

console.log("After function execution")