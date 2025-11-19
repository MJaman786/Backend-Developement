const express = require('express');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// 🧠 Global array to store users temporarily
let users = [];

// form page
app.get('/', (req, res) => {
  res.render('form');
});

// handle form submission
app.post('/register', (req, res) => {
  const data = req.body;

  // push new data to array
  users.push(data);

  console.log('All Users:', users);

  // send all users to EJS
  res.render('table', { users });
});

app.listen(3000, () => {
  console.log(`✅ Server is Up: http://localhost:3000`);
});
