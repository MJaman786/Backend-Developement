const express = require('express');
const app = express();

const header = `
    <!-- Header / Navbar -->
    <header>
        <nav class="navbar">
            <h2 class="logo">MyWebsite</h2>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
`;

const footer = `
    <!-- Footer -->
    <footer>
        <p>&copy; 2025 MyWebsite | All Rights Reserved</p>
    </footer>
`;

// ✅ Function to generate HTML dynamically
function renderPage(title, message) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        ${header}
        <main class="main-section">
            <h1>${message}</h1>
            <p>This is the ${title} page of the site.</p>
            <button>Learn More</button>
        </main>
        ${footer}
    </body>
    </html>
    `;
}

// Middleware to import external css file
app.use(express.static('public/'));

// Home
app.get('/', (req, res) => {
    res.send(renderPage("Home", "Welcome to My Website"));
});

// About
app.get('/about', (req, res) => {
    res.send(renderPage("About", "About Us"));
});

// Services
app.get('/services', (req, res) => {
    res.send(renderPage("Services", "Our Services"));
});

// Contact
app.get('/contact', (req, res) => {
    res.send(renderPage("Contact", "Contact Us"));
});

// 404 Page
app.use((req, res) => {
    res.status(404).send(renderPage("404", "Page Not Found"));
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
})