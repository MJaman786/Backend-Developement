const http = require('http');

const url = require('url')


// const result = url.parse("http://127.0.0.1:5000/", true)
// const result = url.parse("http://127.0.0.1:5000/", true)
// console.log(result)



const app = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })

    res.write("URL parsing")

    
    // const result = url.parse("http://127.0.0.1:5000/", true)
    const result = url.parse(req.url, true)
    console.log(result)

    res.end()


})

const PORT = 5000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
    console.log(`Server Is running..on http://${HOST}:${PORT}`)
})