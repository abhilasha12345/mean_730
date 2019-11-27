const mysql=require('mysql')

module.exports=mysql.createPool({
	'connectionLimit': 1000,
	'host': 'localhost',
	'user': 'root',
	'password': '',
	'database': 'mean_730' 
})

console.log("connection done....")
