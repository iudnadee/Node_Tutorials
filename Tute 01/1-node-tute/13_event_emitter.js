//get back the class
// if want costome extend from class
//otherwise just for emitting and handlling events create instance

const eventEmitter = require('events');

const costomEmitter = new eventEmitter();

//on and emit methods keep track of the order
//additional arguments built-in modules utilize it

costomEmitter.on('response',(name,id)=>{
    console.log('data recived user ${name} with id: ${id} ');
})

costomEmitter.emit('response','john',34)