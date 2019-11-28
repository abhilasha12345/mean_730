console.log("Before function execution")

function demo()
{
    console.log("Demo function execution")
}

var obj=setTimeout(demo,2000)
clearTimeout(obj)

console.log("After function execution")