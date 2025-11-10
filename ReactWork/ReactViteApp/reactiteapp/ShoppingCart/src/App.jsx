import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import MainLayout from './components/MainLayout'

function App() {
  return (
    <>
      <h1>Welcome to Our Online Shopping Center</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mainlayout" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App