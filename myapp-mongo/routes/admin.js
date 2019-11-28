const express = require('express');
const adminModel=require('../models/adminModel')
const indexModel=require('../models/indexModel')
const url=require('url')
const path=require('path')
const router = express.Router();

/* middleware function to check session data */
router.use('/', (req, res, next)=>{
  if(req.session.sunm==undefined || req.session.srole!="admin")
	res.redirect('/login')  
  next()	
});


/* Middleware function to fetch category list */
var clist
router.use("/addsubcat",(req,res,next)=>{
  indexModel.fetchall('addcat').then((result)=>{
  	clist=result
  	next()
  }).catch((err)=>{
  	console.log(err)
  })	
})

/* GET users listing. */
router.get('/',(req, res, next)=>{
  res.render('adminhome',{'sunm':req.session.sunm});
});


router.get('/viewusers', function(req, res, next) {
  adminModel.viewusers().then((result)=>{
	res.render('viewusers',{'userDetails':result,'sunm':req.session.sunm});
  }).catch((err)=>{
  	console.log(err)
  })
});


router.get('/manageusers', function(req, res, next) {
  var urlobj=url.parse(req.url,true).query
  adminModel.manageusers(urlobj).then((result)=>{
	res.redirect("/admin/viewusers")  	
  }).catch((err)=>{
  	console.log(err)
  })
});

router.get('/addcat', function(req, res, next) {
  res.render('addcat',{'output':'','sunm':req.session.sunm});
});
router.post('/addcat', function(req, res, next) {
  var catnm=req.body.catnm
  var caticon=req.files.caticon
  var caticonnm=Date()+"-"+caticon.name
  var caticonpath=path.join(__dirname,"../public/uploads",caticonnm)
  caticon.mv(caticonpath)
  adminModel.addcat(catnm,caticonnm).then((result)=>{
	res.render('addcat',{'output':'Category uploaded successfully','sunm':req.session.sunm});
  }).catch((err)=>{
  	console.log(err)
  })
});


router.get('/addsubcat', (req, res, next)=>{
  res.render('addsubcat',{'output':'','clist':clist,'sunm':req.session.sunm});
});
router.post('/addsubcat',(req, res, next)=>{
  var catnm=req.body.catnm
  var subcatnm=req.body.subcatnm
  var subcaticon=req.files.subcaticon
  var subcaticonnm=Date()+"-"+subcaticon.name
  var subcaticonpath=path.join(__dirname,"../public/uploads",subcaticonnm)
  subcaticon.mv(subcaticonpath)
  adminModel.addsubcat(catnm,subcatnm,subcaticonnm).then((result)=>{
	res.render('addsubcat',{'output':'Sub Category uploaded successfully','clist':clist,'sunm':req.session.sunm});
  }).catch((err)=>{
  	console.log(err)
  })
});


module.exports = router;











