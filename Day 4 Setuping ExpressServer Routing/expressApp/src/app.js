const express = require('express');
const app = express();
const PORT = 3000;

// Reusable Navbar HTML
const navbar = `
    <nav style="padding:10px; background:#333;">
        <a href="/" style="color:white; margin-right:15px;">Home</a>
        <a href="/about" style="color:white; margin-right:15px;">About</a>
        <a href="/contact" style="color:white;">Contact</a>
    </nav>
`;

// Routes
app.get('/', (req, res) => {
    res.send(`
        ${navbar}
        <h1>This is Home Page</h1>
        <p>Welcome to our Express app.</p>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        ${navbar}
        <h1>About Us</h1>
        <p>This is the about page.</p>
    `);
});

app.get('/contact', (req, res) => {
    res.send(`
        ${navbar}
        <h1>Contact</h1>
        <p>Reach us at contact@example.com</p>
    `);
});

// 404 Route (for anything else)
app.use((req, res) => {
    res.status(404).send(`
        ${navbar}
        <h1>404 - Page Not Found</h1>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
