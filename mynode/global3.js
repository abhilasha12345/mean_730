console.log("Before function execution")

function demo()
{
    console.log("Demo function execution")
}

var obj=setInterval(demo,2000)
clearInterval(obj)

console.log("After function execution")