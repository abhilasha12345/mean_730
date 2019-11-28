class A
{
	aData()
	{
		console.log("class A member invoked")
	}
}
class B extends A
{
	bData()
	{
		console.log("class B member invoked")
	}
}

var obj=new B()
obj.aData()
obj.bData()

