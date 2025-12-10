# ✔️ **Topic: Connecting Frontend (React) and Backend (Express) Using Axios + CORS**

---

## 2️⃣ **Updated Folder Structure**

```
mern-project/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   └── controllers/
│
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── components/
    │   └── api/
    └── package.json
```

✔️ Backend and frontend are kept in separate folders.
✔️ Easy for deployment and scaling.

---

## 3️⃣ **Install Required Packages**

### ✔️ Backend

```bash
npm install express cors
```

### ✔️ Frontend

```bash
npm install axios
```

---

## 4️⃣ **Backend Setup (Express + CORS Configuration)**

### ✔️ File: `backend/server.js`

```js
// Import required modules
const express = require("express");      // Express framework
const cors = require("cors");            // To allow frontend to call backend

const app = express();

// Allow requests from React frontend
app.use(cors({
    origin: "http://localhost:3000", // Allow React running on port 3000
    methods: "GET,POST,PUT,DELETE",  // Allowed HTTP methods
    credentials: true                // Allow cookies if needed
}));

// Middleware to parse JSON
app.use(express.json());

// Simple test API
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello Aman! Backend connected successfully 😄" });
});

app.listen(5000, () => {
    console.log("🚀 Backend running on http://localhost:5000");
});
```

### ✔️ Explanation:

* `cors()` → gives permission to frontend.
* `origin` → only React URL is allowed.
* `express.json()` → backend can read JSON data.
* `/api/message` → sample API route.

---

## 5️⃣ **Frontend Setup (React + Axios)**

### ✔️ File: `frontend/src/App.js`

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  // Fetch data from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/message")
      .then(res => {
        setMessage(res.data.message); // Save response in state
      })
      .catch(err => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <div>
      <h1>React + Express Connection</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
```

### ✔️ Explanation:

* React calls backend using Axios.
* `axios.get()` sends request to Express.
* Response is stored in React state.
* Displayed on screen.

---

## 6️⃣ **POST Request Example (React → Backend)**

### ✔️ Backend (POST API)

```js
app.post("/api/user", (req, res) => {
    const username = req.body.username;   // Read data sent by frontend
    res.json({ message: `User ${username} received by backend` });
});
```

### ✔️ Frontend (POST API call)

```jsx
const sendUser = () => {
  axios.post("http://localhost:5000/api/user", {
    username: "Aman"
  })
  .then(res => {
    alert(res.data.message); // Alert backend message
  })
  .catch(err => console.log(err));
};
```

### ✔️ Add Button in React:

```jsx
<button onClick={sendUser}>Send User</button>
```

---

## 7️⃣ **Why CORS Is Required**

✔️ React runs on port **3000**
✔️ Backend runs on port **5000**

Different ports = different origin → browser blocks requests → **CORS allows it**.

### ✔️ Correct CORS Setup

```js
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
```

---

## 8️⃣ **Interview Tips**

✔️ **Why do we need CORS?**
Because frontend and backend run on different ports → browser blocks the request.

✔️ **What is Axios?**
A promise-based HTTP client for sending API requests.

✔️ **Why do we need express.json()?**
To parse JSON body sent from React.

✔️ **What is a REST API?**
A structured way for frontend and backend to communicate.

---

## 9️⃣ **Common Mistakes**

⚠️ Axios URL is wrong → 404 error
⚠️ Forgot `express.json()` → backend can’t read POST data
⚠️ Missing CORS → React cannot access backend
⚠️ Backend not running → Axios request fails

---

## 🔟 **Memory Trick 🧠**

> 💡 **“React asks → Axios delivers → CORS permits → Express answers”**
