class Add
{
  a:number
  b:number
  c:number	
  setAdd(a,b)
  {
    this.a=a
    this.b=b
  }
  addData()
  {
    this.c=this.a+this.b	
  }
  getAdd()
  {
    return {a:this.a,b:this.b,c:this.c}
  }
}

var obj=new Add()
obj.setAdd(10,20)
obj.addData()
var d=obj.getAdd()
console.log("a = "+d.a)
console.log("b = "+d.b)
console.log("add = "+d.c)


