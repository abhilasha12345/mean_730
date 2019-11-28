const fs=require('fs')
console.log("Before stream works")

const readStream=fs.createReadStream("data1.txt")
const writeStream=fs.createWriteStream("data2.txt")

readStream.pipe(writeStream)
console.log("Content added in new source....")

console.log("After stream works")
