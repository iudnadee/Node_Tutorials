const eventEmitter = require('events');

const costomEmitter = new eventEmitter();

costomEmitter.on('response',(name,id)=>{
    console.log(`data recived user ${name} with id: ${id}`)
})

costomEmitter.on('response',()=>{
    console.log('Some ither logic')
})

costomEmitter.emit('response','john',34)