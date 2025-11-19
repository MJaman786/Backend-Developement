const http = require('http');
const url = require('url');

const link = 'https://example.com/search?q=Hello%20World%21&lang=en%2Dus&category=books%2Ffiction';
const parsedlink = url.parse(link, true);
console.log(parsedlink);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(`<h1>Welcome to node js server!</h1>`);
    res.write(`<h1>Server is running....</h1>`);
    res.end(`response end`);
});

server.listen(3000, () => {
    console.log(`Server is running: http://localhost:3000`);
})

/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'example.com',
  port: null,
  hostname: 'example.com',
  hash: null,
  search: '?q=Hello%20World%21&lang=en%2Dus&category=books%2Ffiction',
  query: [Object: null prototype] {
    q: 'Hello World!',
    lang: 'en-us',
    category: 'books/fiction'
  },
  pathname: '/search',
  path: '/search?q=Hello%20World%21&lang=en%2Dus&category=books%2Ffiction',
  href: 'https://example.com/search?q=Hello%20World%21&lang=en%2Dus&category=books%2Ffiction'
}
*/ 