a=10
b=20

function demo()
{
  console.log("module m2 demo function invoked")	
}

function demo1()
{
  console.log("module m2 demo1 function invoked")	
}

module.exports={'a':a,'b':b,'demo':demo,'demo1':demo1}


