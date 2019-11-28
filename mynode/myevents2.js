const events=require('events')
const eventEmitter=new events.EventEmitter()

console.log("Before function invoked")

eventEmitter.on("happen",()=>{
  console.log("happen event invoked")	
})

eventEmitter.addListener("happen1",()=>{
  console.log("happen1 event invoked")	
})

eventEmitter.emit("happen")
eventEmitter.emit("happen")
eventEmitter.emit("happen")

eventEmitter.emit("happen1")
eventEmitter.emit("happen1")
eventEmitter.emit("happen1")
console.log("After function invoked")

