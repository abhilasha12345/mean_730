class Add
{
  public addData(...ar:number[])
  {
	var res:number=0
	for(let i=0;i<ar.length;i++)
		res+=ar[i]
	console.log("Result : "+res)
	 
  	//console.log("Result : "+ar) 
  }	
}

var obj=new Add()
obj.addData()
obj.addData(10)
obj.addData(10,20)
obj.addData(10,20,30)
obj.addData(10,20,30,40)
obj.addData(10,20,30,40,50)



	


