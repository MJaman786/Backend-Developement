const express = require('express');
const url = require('url');

const app = express();

app.use(express.static('public/'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('StudentForm');
})

app.get('/saveform', (req, res) => {
    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.query);

    let userData = {data: parsedUrl.query}
    res.render('UserData', userData);
})

app.listen(3000, () => {
    console.log("Server running: http://localhost:3000");
})