const express = require('express');
const url = require('url');

const app = express();

// Middleware for static files
app.use(express.static('public'));

// ✅ Set EJS as the view engine
app.set('view engine', 'ejs');

// ✅ Define route
app.get('/', (req, res) => {
    res.render('home'); // looks for "views/home.ejs"
});

// ✅ submitted route
app.get('/saveform', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.query);

    const userData = {data:parsedUrl.query};
    res.render('saveForm', userData);
});

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
