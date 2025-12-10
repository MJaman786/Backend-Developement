# ✔️ **Topic: File Handling in Node.js (Blocking vs Non-Blocking)**

---

## 1️⃣ **Goal of This Topic**

We will learn:

✔️ What is file handling in Node.js
✔️ Types of file operations
✔️ What is **Blocking** (Synchronous)
✔️ What is **Non-Blocking** (Asynchronous)
✔️ Code examples with explanations
✔️ Which one to use and when

---

## 2️⃣ **What is File Handling?**

File handling means:

✔️ Reading files (read)
✔️ Writing files (write)
✔️ Updating files (append)
✔️ Deleting files (remove)

Node.js uses a built-in module called **fs (File System)** for file operations.

```
const fs = require('fs');
```

---

## 3️⃣ **Types of File Handling in Node.js**

Node provides two ways:

### ✔️ **1. Blocking (Synchronous) File Handling**

→ Code waits until file task is completed
→ Slower
→ Blocks rest of the program
→ Used only for small tasks

### ✔️ **2. Non-Blocking (Asynchronous) File Handling**

→ Code does NOT wait
→ Faster
→ Does not block program
→ Best for backend servers

---

## 4️⃣ **Blocking File Handling (Synchronous)**

### ✔️ Explanation

* Code executes line-by-line
* Next line waits for the previous one
* Slows performance

### ✔️ Example (Blocking Read File)

```js
const fs = require('fs');

// Reading file synchronously (Blocking)
const data = fs.readFileSync('info.txt', 'utf8');  
// Above line blocks code until file reading is completed

console.log("File Data:", data);  // Executes after file reading finishes
console.log("This runs later");   // Always runs at the end
```

### ✔️ Output order:

```
File Data: (file content)
This runs later
```

💡 Program “waits” for file read → **Blocking**

---

## 5️⃣ **Non-Blocking File Handling (Asynchronous)**

### ✔️ Explanation

* Code does NOT wait
* Uses callback functions
* Highly efficient
* Recommended for backend servers

### ✔️ Example (Non-Blocking Read File)

```js
const fs = require('fs');

// Reading file asynchronously (Non-Blocking)
fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log("File Data:", data); // Runs AFTER reading is completed
});

console.log("This runs immediately"); // Runs WITHOUT waiting
```

### ✔️ Output order:

```
This runs immediately
File Data: (file content)
```

💡 Program does NOT wait → continues execution → **Non-Blocking**

---

## 6️⃣ **Writing Files (Both Ways)**

---

### ✔️ Blocking Write (Synchronous)

```js
fs.writeFileSync("info.txt", "Hello Aman (Sync Write)");
console.log("Sync write completed");
```

### ✔️ Non-Blocking Write (Asynchronous)

```js
fs.writeFile("info.txt", "Hello Aman (Async Write)", () => {
    console.log("Async write completed");
});
console.log("This prints immediately");
```

---

## 7️⃣ **Append to File (Add Content)**

### ✔️ Blocking

```js
fs.appendFileSync("log.txt", "\nNew log added!");
```

### ✔️ Non-Blocking

```js
fs.appendFile("log.txt", "\nNew log added!", () => {
    console.log("Appended asynchronously");
});
```

---

## 8️⃣ **Delete File**

### ✔️ Blocking

```js
fs.unlinkSync("old.txt");
```

### ✔️ Non-Blocking

```js
fs.unlink("old.txt", () => {
    console.log("File Deleted");
});
```

---

## 9️⃣ **Blocking vs Non-Blocking (Comparison Table)**

| Feature                  | Blocking (Sync) | Non-Blocking (Async) |
| ------------------------ | --------------- | -------------------- |
| Speed                    | Slow            | Fast                 |
| Code Waits?              | Yes             | No                   |
| Blocks other code?       | ✔️ Yes          | ❌ No                 |
| Recommended for backend? | ❌ No            | ✔️ Yes               |
| Best for                 | Small scripts   | Real servers         |

---

## 🔟 **When Should You Use What?**

### ✔️ Use Blocking (Sync) When:

* Small script
* One-time file operation
* CLI tools

### ✔️ Use Non-Blocking (Async) When:

* API server
* High performance backend
* Multiple users requesting files

👉 **Async is the standard in backend.**

---

## 1️⃣1️⃣ **Interview Tips**

✔️ **What is blocking?**
When file operation stops the entire program until finished.

✔️ **What is non-blocking?**
Program continues running while file operation happens in background.

✔️ **Why Node is fast?**
Because of non-blocking I/O.

✔️ **Which is recommended?**
Non-blocking (Asynchronous).

✔️ **What module handles files?**
The `fs` module.

---

## 1️⃣2️⃣ **Common Mistakes**

⚠️ Using Sync functions inside API → slows entire server
⚠️ Missing callback in async functions
⚠️ Not checking error `if (err)`
⚠️ Using wrong file path
⚠️ Large data in Sync reading → blocks event loop

---

## 1️⃣3️⃣ **Memory Trick 🧠**

> 💡 **Sync = Slow + Stuck**
>
> 💡 **Async = Always Running**

---