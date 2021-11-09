const express =require('express');
const app = express()

//app.get
app.get('/',(req,res)=>{
    console.log('User hit the server');
    res.status(200).send('Home page')
})

app.get('/about', (req, res)=>{
    res.status(200).send('About page')
})

//app.all
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resourse not found</h1>')
})
//app.listen
app.listen(5000,()=>{
    console.log('server is listning to port 5000');
})


//app.post
//app.put
//app.delete

//app.use

