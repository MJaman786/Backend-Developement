const express = require("express");
const app = express();
const path = require("path");

// Middleware for static files
app.use(express.static("public"));

// Expose Bootstrap + Bootstrap Icons from node_modules
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);
app.use(
  "/bootstrap-icons",
  express.static(path.join(__dirname, "node_modules/bootstrap-icons/font"))
);

// Set view engine
app.set("view engine", "ejs");

// Sample Student Data
const students = [
  { name: "Aarav Mehta", rollNo: "101", course: "ExpressJS", batch: "10-12 AM" },
  { name: "Riya Sharma", rollNo: "102", course: "MongoDB", batch: "12-3 PM" },
  { name: "Rohit Patil", rollNo: "103", course: "NodeJS", batch: "2:30-4:30 PM" },
  { name: "Neha Kulkarni", rollNo: "104", course: "EJS", batch: "5-6 PM" },
];

// Routes
app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/students", (req, res) => {
  res.render("pages/students", { students });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

// Start server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
