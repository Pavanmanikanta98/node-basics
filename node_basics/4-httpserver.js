const http = require('http')
//creating a server
const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.end("welcome to home page")
    }
    else if (req.url == "/about") {
        
        res.end('this is about page')
    }
    else {
        res.end(`
    <h1>  oops!!!  </h1>
    <p>we can't find that page you are looking for...</p>
    <a href="/">back to home</a>
    `)
    }
    
})
//listener
server.listen(4000,()=> {
    console.log("server is running");
})