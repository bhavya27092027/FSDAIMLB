import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import MainLayout from './components/MainLayout'
import { useState } from 'react'

function App() {
  const [logData, setlogData] = useState();
  return (
    <>
      <h1 style={{ fontFamily: 'cursive', fontSize: "80px", textAlign: "center" }}>Welcome to Our Online Shopping Center</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login loginData={logData} />} /> {/* // State-up Lifting: Lifting state up in React means moving shared state to the closest common ancestor component so that multiple child components can access and update it consistently. */}
          <Route path="/registration" element={<Registration regData={setlogData} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<MainLayout />} /> {/* // Default Layout , means whenever our application opens main layout is visble to us */}
        </Routes>
      </BrowserRouter>
      <h2>
        {
          JSON.stringify(logData)
        }
      </h2>
    </>
  )
}

export default App

// Node has inbuilt server 
// Express is advance version of Node 
// Key Differences

/* Node.js is a **runtime environment** that lets you run JavaScript outside the browser, while Express.js is a **web framework built on top of Node.js** that simplifies building APIs and web applications.

---

## 🌐 Node.js
- **Definition:** Open-source, cross-platform runtime environment for executing JavaScript outside the browser.  
- **Purpose:** Provides the foundation for server-side JavaScript.  
- **Features:**
  - Event-driven, non-blocking I/O model → highly scalable.  
  - Core modules (HTTP, File System, Path, etc.) for low-level server tasks.  
  - Suitable for building APIs, real-time apps (like chat apps), and backend services.  
- **Limitation:** Without frameworks, you must manually handle routing, middleware, and request/response logic.

---

## ⚡ Express.js
- **Definition:** A lightweight, flexible **web application framework** built on Node.js.  
- **Purpose:** Simplifies backend development by abstracting repetitive tasks.  
- **Features:**
  - Built-in **routing system** (GET, POST, PUT, DELETE).  
  - Middleware support for authentication, logging, error handling.  
  - Easy integration with databases and templating engines.  
  - Minimal boilerplate compared to raw Node.js.  
- **Use Case:** Ideal for RESTful APIs, single-page applications, and microservices.

---

## 🔑 Key Differences

| Aspect              | Node.js | Express.js |
|---------------------|---------|------------|
| Type                | Runtime environment | Web framework |
| Role                | Executes JS outside browser | Simplifies server & API development |
| Complexity          | Low-level, manual setup | High-level, structured |
| Routing             | Manual implementation | Built-in routing |
| Middleware          | Not included | Fully supported |
| Use Case            | Base for backend apps | Rapid API & web app development |

Sources: 

---

## 🚀 When to Use
- **Use Node.js alone** if you want full control over server logic, lightweight scripts, or custom implementations.  
- **Use Express.js** if you want to quickly build scalable APIs or web apps with less boilerplate and more structure.  

👉 Think of **Node.js as the engine** and **Express.js as the car body**—you can drive with just the engine, but Express makes the ride smoother and more practical.  


 */


