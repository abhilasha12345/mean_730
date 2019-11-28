class A
{
	a:number=100
	aData()
	{
		console.log("class A member invoked")
	}
}
class B extends A
{
	b:number=200
	bData()
	{
		console.log("a = "+this.a)
		console.log("b = "+this.b)
		console.log("class B member invoked")
	}
}

var obj=new B()
obj.aData()
obj.bData()
console.log("a outside class= "+obj.a)
