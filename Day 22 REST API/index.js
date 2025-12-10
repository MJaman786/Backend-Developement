const express = require('express');
const userData = require('./MOCK_DATA.json');

const app = express();

app.listen(3000, () => {
    console.log(`SERVER RUNNING: http://localhost:3000`);
})

// home route
app.get('/', (req, res) => {
    const html = `
        <ul>
            ${userData.map((data) => (
        `<li>${data.first_name}, ${data.last_name}</li>`
    )).join("")}
        </ul>
    `
    res.send(html);
})

// api/users
app.get('/api/users', (req, res) => {
    res.send(userData)
})

// api/user/:id
app.get('/api/user/:id', (req, res)=>{
    const id = req.params.id;
    const data = userData.filter((data)=>{
        return data.id === Number(id)
    });
    res.send(data);
})