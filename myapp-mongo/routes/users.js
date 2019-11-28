const express = require('express');
const url = require('url');
const path = require('path');
const userModel = require('../models/userModel');
const indexModel = require('../models/indexModel');
const router = express.Router();

/* middleware function to fetch sub category list */
var clist
router.use("/addproduct",(req,res,next)=>{
	indexModel.fetchall('addcat').then((result)=>{
  	  clist=result;
  	  next()
	}).catch((err)=>{
  	  console.log(err)
        })
})


/* middleware function to check session data */
router.use('/', (req, res, next)=>{
  if(req.session.sunm==undefined || req.session.srole!="user")
	res.redirect('/login')  
  next()	
});

/* GET users listing. */
router.get('/',(req, res, next)=>{
  res.render('userhome',{'sunm':req.session.sunm});
});

router.get('/userbuy',(req, res, next)=>{
  var PAYPAL_URL="https://www.sandbox.paypal.com/cgi-bin/webscr"
  var PAYPAL_ID="tripathikartikay28-myseller@gmail.com"
  res.render('userbuy',{'sunm':req.session.sunm,'pid':req.session.pid,'price':req.session.price,'PAYPAL_URL':PAYPAL_URL,'PAYPAL_ID':PAYPAL_ID});
});

router.get('/fetchsubcat',(req, res, next)=>{
  cnm=url.parse(req.url,true).query.c	  
   indexModel.fetchsubcat(cnm).then((result)=>{
  	res.send(result)
  }).catch((err)=>{
  	console.log(err)
  })	
});


router.get('/addproduct',(req, res, next)=>{
  res.render('addproduct',{'sunm':req.session.sunm,'clist':clist,'output':''});
});
router.post('/addproduct',(req, res, next)=>{
  
  var f1=req.files.f1
  if(f1!=undefined)
  {
  	var f1nm=Date()+"-"+f1.name
  	var f1path=path.join(__dirname,"../public/uploads",f1nm)
  	f1.mv(f1path)
  }
  else
  	var f1nm="logo.jpeg"
  	
  var f2=req.files.f2
  if(f2!=undefined)
  {
  	var f2nm=Date()+"-"+f2.name
  	var f2path=path.join(__dirname,"../public/uploads",f2nm)
  	f2.mv(f2path)
  }
  else
  	var f2nm="logo.jpeg"
  	
  var f3=req.files.f3
  if(f3!=undefined)
  {
  	var f3nm=Date()+"-"+f3.name
  	var f3path=path.join(__dirname,"../public/uploads",f3nm)
  	f3.mv(f3path)
  }
  else
  	var f3nm="logo.jpeg"		
  
  userModel.addproduct(req.body,f1nm,f2nm,f3nm).then((result)=>{
	  res.render('addproduct',{'sunm':req.session.sunm,'clist':clist,'output':'Product added successfully'});  
  }).catch((err)=>{
  	console.log(err)
  })
  	
});

module.exports = router;
