const express = require('express');
const url = require('url');
const app = express();

// setting middleware for EJS
app.set('view engine', 'ejs')

// setting up css
app.use(express.static('public/'))

app.get('/', (req, res) => {
    res.render('form', { title: 'Add New Product' });
})

app.get('/form-data', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.query);
    
    const obj = {data: parsedUrl.query}
    res.render('submit',obj);
})

app.listen(3000, ()=>{
    console.log('Server is running: http://localhost:3000');
})