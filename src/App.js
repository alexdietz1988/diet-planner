import Header from './components/Header'
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Basics from './pages/Basics/Basics'
import EditBasics from './pages/EditBasics/EditBasics'
import YourDiet from './pages/YourDiet/YourDiet'
import AddMeal from './pages/AddMeal'
import EditMeal from './pages/EditMeal'

import { Route, Routes} from "react-router-dom"
import { useState } from 'react'

function App() {
  const backend = 'http://localhost:4000/'
  const [user, setUser] = useState('')
  const [basics, setBasics] = useState({weight: 0, goal: 'maintain', TDEE: 0})
  const [targets, setTargets] = useState({calories: 0, protein: 0})
  const [meal, setMeal] = useState({})

  return (
    <>
    <section className="section">
      <Header user={user} setUser={setUser}/>

      <section className="section">
          <Routes>
            <Route exact path='/' element={<Landing />} />

            <Route path='/signup' element={<Auth backend={backend} setUser={setUser} user={user} page="signup"/>} />
            <Route path='/login' element={<Auth backend={backend} setUser={setUser} user={user} page="login"/>} />

            <Route path='/basics' element={<Basics backend={backend} user={user} basics={basics} setBasics={setBasics} setTargets={setTargets}/>} />
            <Route path='/edit-basics' element={<EditBasics backend={backend} user={user} basics={basics} setBasics={setBasics}/>} />

            <Route path='/your-diet' element={<YourDiet backend={backend} user={user} targets={targets} setMeal={setMeal} />} />
            
            <Route path='add-meal' element={<AddMeal backend={backend} user={user}/>} />
            <Route path='edit-meal' element={<EditMeal backend={backend} user={user} meal={meal}/>} />
          </Routes>
      </section>

    </section>
    </>
  )
}

export default App