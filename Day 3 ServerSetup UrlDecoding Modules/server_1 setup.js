
// built in module
const http = require('http')

//import user defined module 
const result = require('./calculator')



const app = http.createServer((req, res) => {

    // header set for html content
    res.writeHead(200, { 'content-type': 'text/html' })

    res.write("<h1>Welcome To Node JS Server !!</h1>")
    res.write("<h1>Welcome To Node JS Server !!</h1>")
    res.write("<h1>Welcome To Node JS Server !!</h1>")

    console.log(result.sum(10, 30, 40))
    res.write(`
        
        <h2>Your Name is ${result.obj.name}</h2>
        

        `)


    res.end("response end")

})


const PORT = 3000;
const HOST = '127.0.0.1';

// must port 
app.listen(PORT, HOST, () => {
    console.log(`server is running http://${HOST}:${PORT}`)
})

