const express = require('express')
const app = express()
let {people} =require('./data')

//static asset
app.use(express.static('./methods-public'))

//prase form data
app.use(express.urlencoded({extended: false}))

//prase json data
app.use(express.json())

app.get('/api/people',(req,res)=>{
    res.status(200).json ({sucess : true, data : people})
})

//tradtional option
app.post('/login',(req,res)=>{
    const {name} = req.body;

    if (name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('please provide name')
})

//javascript option
app.post('/api/people',(req,res)=>{
    const {name} = req.body;

    if(!name){
        return res.status(400).json({success: false, msg: 'please provide name'})
    }
    res.status(201).send({sucess:true , person:name})
})

app.listen(5000,() =>{
    console.log('Server is listening to port 5000...');
} )