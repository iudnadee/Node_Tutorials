const express = require('express')
const app = express()
const morgan = require('morgan')
const logger= require('./logger')
const authorize = require('./authorize')
//req => middleware => res

//In api.use if we ommit the '/api' logger will apply for every route
// app.use('/api',logger) - single middle ware

//multiple middleware
// app.use([logger,authorize])

//setup static and middleware
// app.use(express.static('./public'))
app.use (morgan('tiny'))
app.get('/',(req,res)=>{
    res.send('Home')
})

// app.get('/about',[logger,authorize](req,res)=>{
//     res.send('About')
// })
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user);
    res.send('items')
})
app.listen(5000,() =>{
    console.log('Server is listening to port 5000...');
} )