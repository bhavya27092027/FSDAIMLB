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