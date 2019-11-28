interface A
{
	aData()
}
interface B
{
	bData()
}
class C implements A,B
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
		console.log("class C member invoked")
	}
}

var obj=new C()
obj.aData()
obj.bData()
obj.cData()

