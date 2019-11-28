class A
{
	protected a:number=100
	public aData()
	{
		console.log("class A member invoked")
	}
}
class B extends A
{
	protected b:number=200
	public bData()
	{
		console.log("a = "+this.a)
		console.log("b = "+this.b)
		console.log("class B member invoked")
	}
}

var obj=new B()
obj.aData()
obj.bData()
//console.log("a outside class= "+obj.a)
