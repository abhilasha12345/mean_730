const express = require('express');
const indexModel=require('../models/indexModel')
const mymail=require('./mailapi')
const url=require('url')
const router = express.Router();


/* middleware function to delete session data */
router.use('/', (req, res, next)=>{
  p=url.parse(req.url,true).pathname
  if(p=='/home' || p=='/about' || p=='/contact' || p=='/service' || p=='/register' || p=='/login')
  {
  	if(req.session.sunm!=undefined)
  	{
  		req.session.sunm=undefined
  		req.session.srole=undefined
  	}
  }
  next()	
});



var clist
router.use('/viewsubcat', (req, res, next)=>{
  indexModel.fetchall('addcat').then((result)=>{
  	clist=result
  	next()
  }).catch((err)=>{
  	console.log(err)
  })  
});

var clist1
router.use('/showproducts', (req, res, next)=>{
  indexModel.fetchall('addcat').then((result)=>{
  	clist1=result
  	next()
  }).catch((err)=>{
  	console.log(err)
  })  
});



/* GET home page. */
router.get('/', (req, res, next)=>{
  indexModel.fetchall('addcat').then((result)=>{
  	res.render('index',{'clist':result});
  }).catch((err)=>{
  	console.log(err)
  })  
});

router.get('/about',(req, res, next)=>{
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


router.get('/service', function(req, res, next) {
  var PAYPAL_URL="https://www.sandbox.paypal.com/cgi-bin/webscr"
  var PAYPAL_ID="tripathikartikay28-myseller@gmail.com"	  
  var name="Bike"
  var id=1
  var price=500	
  res.render('service',{'PAYPAL_URL':PAYPAL_URL,'PAYPAL_ID':PAYPAL_ID,'name':name,'id':id,'price':price});
});


router.get('/register', function(req, res, next) {
  res.render('register',{'output':''});
});
router.post('/register', function(req, res, next) {
  indexModel.register(req.body).then((result)=>{
	mymail(req.body,()=>{
		res.render('register',{'output':'Register successfully....'});	
	})  
  }).catch((err)=>{
  	console.log(err)
  })
});

router.get('/verifyaccount', function(req, res, next) {
  email=url.parse(req.url,true).query.email
  indexModel.verifyaccount(email).then((result)=>{
	res.redirect("/login");  
  }).catch((err)=>{
  	console.log(err)
  })
});



router.get('/login', function(req, res, next) {
  res.render('login',{'output':''});
});
router.post('/login', function(req, res, next) {
  indexModel.login(req.body).then((result)=>{
  	if(result.length>0)
  	{
  		/* code to store session */
  		req.session.sunm=result[0].email
  		req.session.srole=result[0].role
  		
  		if(result[0].role=="admin")
  			res.redirect('/admin')
  		if(result[0].role=="user")
  			res.redirect('/user')	
  	}
  	else
  		res.render('login',{'output':'Invalid User or Verify your account from inbox......'});
  }).catch((err)=>{
  	console.log(err)
  })
});

router.get('/viewsubcat',(req, res, next)=>{
  cnm=url.parse(req.url,true).query.cnm
  indexModel.fetchsubcat(cnm).then((result)=>{
  	res.render('viewsubcat',{'cnm':cnm,'sclist':result,'clist':clist});
  }).catch((err)=>{
  	console.log(err)
  })
});


router.get('/showproducts',(req, res, next)=>{
  urlobj=url.parse(req.url,true).query
  indexModel.fetchproducts(urlobj).then((result)=>{
  	res.render('showproducts',{'scnm':urlobj.scnm,'plist':result,'clist':clist1});
  }).catch((err)=>{
  	console.log(err)
  })
});

router.get('/buylogin', function(req, res, next) {
  urlobj=url.parse(req.url,true).query
  res.render('buylogin',{'urlobj':urlobj,'output':''});
});

router.post('/buylogin', function(req, res, next) {
  indexModel.login(req.body).then((result)=>{
  	if(result.length>0)
  	{
  		/* code to store session */
  		req.session.sunm=result[0].email
  		req.session.pid=req.body.pid
  		req.session.price=req.body.price
  		req.session.srole=result[0].role
  		
  		if(result[0].role=="user")
  			res.redirect('/user/userbuy')	
  	}
  	else
  		res.render('buylogin',{'output':'Invalid User Details......'});
  }).catch((err)=>{
  	console.log(err)
  })
});

router.get('/cancel', function(req, res, next) {
  res.render('cancel');
});

router.get('/payment', function(req, res, next) {
  urlobj=url.parse(req.url,true).query
  indexModel.payment(urlobj).then((result)=>{
  	res.redirect('/success')
  }).catch((err)=>{
  	console.log(err)
  })
  
});

router.get('/success', function(req, res, next) {
  res.render('success');
});


module.exports = router;

















