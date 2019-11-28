const mongoose=require('mongoose')
const conUrl="mongodb://localhost:27017/mean_730"
mongoose.connect(conUrl)
const db=mongoose.connection
console.log("connection done with mongodb....")
module.exports=db
