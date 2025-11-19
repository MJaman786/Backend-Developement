const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });

    const link = url.parse(req.url, true);
    console.log(link)

    if (link.pathname === "/") {
        res.write(`<h1>Welcome to Home Page</h1>`);
    }
    else if (link.pathname === "/about") {
        res.write(`<h1>About Us Page</h1>`);
    }
    else if (link.pathname === "/contact") {
        res.write(`<h1>Contact Page</h1>`);
    }
    else {
        res.write(`<h1>404 Page Not Found</h1>`);
    }

    res.end(`<h2>Response end here...</h2>`);
})

server.listen(3000, () => {
    console.log('Server is up http://localhost:3000');
})