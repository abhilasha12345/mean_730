function MyCollection()
{
this.a=10
this.b=20

this.demo=()=>{
  console.log("module m2 demo function invoked")	
}

this.demo1=()=>{
  console.log("module m2 demo1 function invoked")	
}

}

module.exports=new MyCollection()


