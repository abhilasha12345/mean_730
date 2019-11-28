interface A
{
	aData()
}
interface B extends A
{
	bData()
}
interface C extends A
{
	cData()
}
class D implements B,C
{
	aData()
	{
		console.log("interface A member invoked")
	}
	bData()
	{
		console.log("interface B member invoked")
	}
	cData()
	{
		console.log("interface C member invoked")
	}
	dData()
	{
		console.log("class D member invoked")
	}
}

var obj=new D()
obj.aData()
obj.bData()
obj.cData()
obj.dData()
