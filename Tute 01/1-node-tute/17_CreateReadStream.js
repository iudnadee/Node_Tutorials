const {createReadStream} =require('fs');

const stream =createReadStream('./content/big.txt',{highWaterMark :900000 , encoding :'utf8'})

//default 64kb
//last bufer -reminder
//highWaterMark - control size
//const stream =createReadStream('./content/big.txt' ,{highWaterMark :900000})
//const stream =createReadStream('./content/big.txt', {encoding :'utf8})

stream.on('data', (result)=>{
    console.log(result);
})

//error event
stream.on('error', (err)=>{
    console.log(err);
})