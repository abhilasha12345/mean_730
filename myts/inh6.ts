class A
{
	aData()
	{
		console.log("class A member invoked")
	}
}
class B
{
	bData()
	{
		console.log("class B member invoked")
	}
}
class C extends A,B
{
	cData()
	{
		console.log("class C member invoked")
	}
}

var obj=new C()
obj.aData()
obj.bData()
obj.cData()

