const events=require('events')
const eventEmitter=new events.EventEmitter()

console.log("Before function invoked")

eventEmitter.on("happen",()=>{
  console.log("happen event invoked")	
})


eventEmitter.emit("happen")
eventEmitter.emit("happen")
eventEmitter.emit("happen")

console.log("After function invoked")

