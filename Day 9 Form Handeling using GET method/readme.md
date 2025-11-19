# Express.js and EJS Form Handling (GET Method)

This is a simple project demonstrating how to handle form submissions using the **GET** method in an Express.js server, with EJS (Embedded JavaScript) as the view engine for the frontend.

## 🚀 What You'll Learn

* How to set up a basic Express.js server.
* How to configure Express to use EJS for dynamic HTML.

## This is Folder Structure

``` bash
Day 9 Form Handeling using GET Method
│
├── node_modules/             # Installed dependencies
│
├── public/                   # Public files (accessible in browser)
│   ├── css/
│   │   ├── form.css          # Styles for form page
│   │   └── submit.css        # Styles for submit page
│   │
│   └── img/                  # Images folder (if needed)
│
├── views/                    # EJS templates
│   ├── partials/             # Reusable template parts
│   │   └── cdn.ejs           # External CDN links (e.g., Bootstrap)
│   │
│   ├── form.ejs              # Form input page
│   └── submit.ejs            # Form result page
│
├── App.js                    # Express.js main server file
├── package.json              # Project configuration
├── package-lock.json         # Lock file for dependencies
└── readme.md                 # Project documentation
```

``` javascript
// <strong>Step 1: Tell Express to use EJS as the template engine</strong>
app.set('view engine', 'ejs');

// <strong>Step 2: Tell Express where to find static files (CSS, Images)</strong>
// The 'public' folder is now accessible via the root URL.
app.use(express.static('public'));
```

# 📖 EJS Syntax
Here are the most common EJS tags you’ll use:

* 1. <%= %> → Output value
``` bash
This displays a variable directly inside HTML.

<p>Hello, <%= name %>!</p>
If name = "Aman", the page will show:
👉 Hello, Aman!
```

* 2. <%- %> → Output raw HTML
``` bash
This is used when you want to insert HTML directly (not escaped).

<%- "<h2>Bold Text</h2>" %>
👉 Will actually render <h2>Bold Text</h2> on the page.
```
* 3. <% %> → Run JavaScript code (no output)
``` bash
This is useful for loops, conditions, or calculations.

<% for(let i = 1; i <= 3; i++) { %>
  <p>Number: <%= i %></p>
<% } %>
👉 Will display:
Number: 1
Number: 2
Number: 3
```

* 4. <%- include("file") %> → Include partials
``` bash
You can reuse code (like headers, footers, or CDNs).
Example:
<%- include("partials/cdn") %>

This will insert the contents of views/partials/cdn.ejs inside the file.
```

## 🎯 Summary
``` bash
<%= %> → Show a variable’s value.
<%- %> → Show raw HTML.
<% %> → Run JavaScript (if/for/while etc).
<%- include("file") %> → Reuse partial templates.
```