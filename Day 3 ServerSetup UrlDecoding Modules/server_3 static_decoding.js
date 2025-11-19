const http = require('http')


// import url package
const url = require('url')
// const urldata=url.parse(url_link,true)

const url_link = "https://www.google.com/search?q=react+js+jobs+in+pue&rlz=1C1VDKB_enIN1180&oq=react+js+jobs+in+pue&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQIxgnGIAEGIoFMgcIAhAAGIAEMgcIAxAAGIAEMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEJMTMyOTZqMGo5qAIGsAIB8QVHLA1PEpXXmQ&sourceid=chrome&ie=UTF-8&jbr=sep:0"
const result = url.parse(url_link, true)
// console.log(result)
console.log(result.query)

// pathname
console.log(result.pathname)


const app = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": 'text/html' })

    res.write("<h1>URL Parsing In Node JS - url package</h1>")

    res.end()

})

const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT, () => {
    console.log("Server is up....😊")
})




// url parsing- to fetch data from url
// http:localhost:3000/path?name=abc&skill=js



// https: - NP
//www.google.com - domain name
//  /search - path


// ?
// q=apple+iphone+17+pro+max 0 query

// &-variables

// &rlz=1C1VDKB_enIN1180

// &oq=apple+iphone
// &gs_lcrp=EgZjaHJvbWUqCggGEAAYsQMYgAQyDwgAEEUYORiDARixAxiABDIMCAEQIxgnGIAEGIoFMg0IAhAAGIMBGLEDGIAEMgoIAxAAGLEDGIAEMg0IBBAAGIMBGLEDGIAEMhAIBRAAGIMBGLEDGIAEGIoFMgoIBhAAGLEDGIAEMgYIBxBFGDzSAQg5MTQ5ajBqN6gCALACAA
// &sourceid=chrome
// &ie=UTF-8


// **********************************

// https: - NP
//www.google.com - domain
// /search -path
// ?q=react+js+jobs+in+pue - query
// varibles
// &
// rlz=1C1VDKB_enIN1180
// &oq=react+js+jobs+in+pue
// &gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQIxgnGIAEGIoFMgcIAhAAGIAEMgcIAxAAGIAEMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEJMTMyOTZqMGo5qAIGsAIB8QVHLA1PEpXXmQ
// &sourceid=chrome
// &ie=UTF-8