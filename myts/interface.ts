interface A
{
	aData()
}
class B implements A
{
	aData()
	{
		console.log("interface A member invoked")
	}
	bData()
	{
		console.log("class B member invoked")
	}
}

var obj=new B()
obj.aData()
obj.bData()

