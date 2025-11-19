// Import http module
const http = require('http');
const url = require('url');

// Create server
const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    

    // Example: decode full path and query
    const pathname = decodeURIComponent(parsedUrl.pathname);
    const query = {};
    for (let key in parsedUrl.query) {
        query[key] = decodeURIComponent(parsedUrl.query[key]);
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        originalUrl: req.url,
        decodedPath: pathname,
        decodedQuery: query
    }, null, 2));
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
    // console.log(parsedUrl)
});
