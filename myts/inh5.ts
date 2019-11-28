class A
{
	constructor()
	{
		console.log("class A constructor invoked")
	}
	aData()
	{
		console.log("class A member invoked")
	}
}
class B extends A
{
	constructor()
	{
		super()
		console.log("class B constructor invoked")
	}
	bData()
	{
		console.log("class B member invoked")
	}
}

var obj=new B()
obj.aData()
obj.bData()

