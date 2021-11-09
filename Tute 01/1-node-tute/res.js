const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }

    if(req.url === '/about'){
        res.end('here is our story')
    }
    
    res.end(`
        <h1>Ooops!</h1>
        <p>We can't seems to find the page you are looking for </p>
        <a href="/">Back to home</a>
    `)
})

server.listen(5000, ()=>{
    console.log('Server listening on port : 3000 ....');
})