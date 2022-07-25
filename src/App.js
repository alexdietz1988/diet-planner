// POST '/auth/signup'
// POST '/auth/login'
// username, password

import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Route, Routes, Link } from "react-router-dom"

function App() {
  let backend = 'http://localhost:4000/'

  return (
    <>
      <h1>Diet Planner</h1>
        <p>A simple tool for planning a diet to help you bulk, cut, or maintain.</p>
        <p><Link to='/signup'>Signup</Link> | <Link to='/login'>Login</Link></p>

      <Routes>
        <Route path='/signup' element={<Signup backend={backend} />} />
        <Route path='/login' element={<Login backend={backend} />} />
      </Routes>
    </>
  )
}

export default App;
