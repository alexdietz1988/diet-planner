import Header from './components/Header'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'

import Dashboard from './pages/Dashboard/Dashboard'
import EditBasics from './pages/Dashboard/EditBasics'
import AddMeal from './pages/Dashboard/AddMeal'
import EditMeal from './pages/Dashboard/EditMeal'

import { Route, Routes, useNavigate } from "react-router-dom"
import { useState } from 'react'

function App() {
  let navigate = useNavigate()
  let backend = 'http://localhost:4000/'

  const [user, setUser] = useState('')
  const [basics, setBasics] = useState({weight: 0, goal: 'maintain', TDEE: 0})
  const [meal, setMeal] = useState({})

  function logout() {
    setUser('')
    navigate('/')
  }

  return (
    <>
      <Header user={user} logout={logout}/>
      <div class="container">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup backend={backend} setUser={setUser} user={user}/>} />
        <Route path='/login' element={<Login backend={backend} setUser={setUser} user={user}/>} />
        <Route path='/dashboard' element={<Dashboard backend={backend} user={user} basics={basics} setBasics={setBasics} setMeal={setMeal}/>}/>
        <Route path='/edit-basics' element={<EditBasics backend={backend} user={user} basics={basics} setBasics={setBasics}/>}/>
        <Route path='add-meal' element={<AddMeal backend={backend} user={user} />} />
        <Route path='edit-meal' element={<EditMeal backend={backend} user={user} meal={meal} setMeal={setMeal}/>} />
      </Routes>
      </div>
    </>
  )
}

export default App