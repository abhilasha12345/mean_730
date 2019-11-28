class Add
{
  a:number
  b:number
  c:number	
  getData():void
  {
    this.a=100
    this.b=200
  }	
  addData():void
  {
    this.c=this.a+this.b	
  }
  showData():void
  {
    console.log("a = "+this.a)
    console.log("b = "+this.b)
    console.log("add = "+this.c)	
  }
}

var obj=new Add()
obj.getData()
obj.addData()
obj.showData()


//console.log(obj)
//console.log(typeof obj)
