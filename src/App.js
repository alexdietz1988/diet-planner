import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'

import Dashboard from './pages/Dashboard/Dashboard'
import EditUserInfo from './pages/Dashboard/EditUserInfo'
import AddMeal from './pages/Dashboard/AddMeal'
import EditMeal from './pages/Dashboard/EditMeal'

import { Route, Routes, Link, useNavigate } from "react-router-dom"
import { useState } from 'react'

function App() {
  let navigate = useNavigate()
  let backend = 'http://localhost:4000/'

  const [user, setUser] = useState('')
  const [weight, setWeight] = useState('')
  const [goal, setGoal] = useState('')
  const [meal, setMeal] = useState({})

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
        <Route path='/dashboard' element={<Dashboard backend={backend} user={user} setWeight={setWeight} setGoal={setGoal} weight={weight} goal={goal} setMeal={setMeal}/>}/>
        <Route path='/edit-user-info' element={<EditUserInfo backend={backend} user={user} setWeight={setWeight} setGoal={setGoal} weight={weight} goal={goal}/>}/>
        <Route path='add-meal' element={<AddMeal backend={backend} user={user} />} />
        <Route path='edit-meal' element={<EditMeal backend={backend} user={user} meal={meal} setMeal={setMeal}/>} />
      </Routes>
    </>
  )
}

export default App