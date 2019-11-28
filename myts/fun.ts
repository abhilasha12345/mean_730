function add(a:number,b:number) //formal parameter
{
	var c:number=a+b
	return c
}

var a:number=100
var b:number=200
var res:number=add(a,b) //actual parameter 
console.log("add = "+res)
