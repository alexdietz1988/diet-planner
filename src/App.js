import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import EditUserInfo from './pages/EditUserInfo'
import { Route, Routes, Link, useNavigate } from "react-router-dom"
import { useState } from 'react'

function App() {
  let navigate = useNavigate()
  let backend = 'http://localhost:4000/'

  const [user, setUser] = useState('')
  const [weight, setWeight] = useState('')
  const [goal, setGoal] = useState('')

  function logout() {
    setUser('')
    navigate('/')
  }

  return (
    <>
      <h1>Diet Planner</h1>
        <p>A simple tool for planning a diet to help you bulk, cut, or maintain.</p>
        
        {user === '' ? <><Link to='/signup'>Signup</Link> | <Link to='/login'>Login</Link></> : <button onClick={logout}>Logout</button>}

      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup backend={backend} setUser={setUser} user={user}/>} />
        <Route path='/login' element={<Login backend={backend} setUser={setUser} user={user}/>} />
        <Route path='/dashboard' element={<Dashboard backend={backend} user={user} setWeight={setWeight} setGoal={setGoal} weight={weight} goal={goal}/>}/>
        <Route path='/edit-user-info' element={<EditUserInfo backend={backend} user={user} setWeight={setWeight} setGoal={setGoal} weight={weight} goal={goal}/>}/>
      </Routes>
    </>
  )
}

export default App;
