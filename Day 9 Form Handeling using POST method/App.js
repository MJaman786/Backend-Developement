const express = require('express');
const app = express();

// setting middleware for EJS
app.set('view engine', 'ejs')

// *** NEW: Middleware for POST requests to parse form data into req.body ***
// This is essential for Express to understand the incoming form data.
app.use(express.urlencoded({ extended: true }));

// setting up css
app.use(express.static('public/'))

// Route for the initial form page
app.get('/', (req, res) => {
    res.render('form', { title: 'Add New Product' });
})

// *** NEW: Route to handle form submission using the POST method ***
app.post('/form-data', (req, res) => {
    // When using POST with express.urlencoded, the form data is in req.body
    const submittedData = req.body;
    console.log(req);
    console.log('Data received via POST:', submittedData);
    
    // Pass the data to the submit template
    const obj = {data: submittedData}
    res.render('submit', obj);
})

// The old app.get('/form-data') route is now removed/ignored.

app.listen(3000, ()=>{
    console.log('Server is running: http://localhost:3000');
})
