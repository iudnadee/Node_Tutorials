const http = require ('http')

//const server = http.vreateServer ((req, res) =>{
//      res.end('welcome')
//})

//Using Event Emitter API

const server = http.createServer()
//emit request event
//subscribe to it/ listen for if /response for it

server.on('request', (req, res)=> {
    res.end('Welcome this is called by event emmitter')
})

server.listen(5000)
