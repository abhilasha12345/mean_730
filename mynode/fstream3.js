const fs=require('fs')
const zlib=require('zlib')
console.log("Before stream works")

const readStream=fs.createReadStream("data1.txt")
const gzip=readStream.pipe(zlib.createGzip())
gzip.pipe(fs.createWriteStream("data1.txt.gz"))

console.log("Task done....")

console.log("After stream works")
