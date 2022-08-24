import { Route, Routes} from "react-router-dom"
import { useState } from 'react'

import Header from './components/Header'
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Basics from './pages/Basics/Basics'
import EditBasics from './pages/EditBasics/EditBasics'
import YourDiet from './pages/YourDiet/YourDiet'
import AddMeal from './pages/AddMeal'
import EditMeal from './pages/EditMeal'

function App() {
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

            <Route path='/signup' element={<Auth user={user} setUser={setUser} page="signup"/>} />
            <Route path='/login' element={<Auth user={user} setUser={setUser} page="login"/>} />

            <Route path='/basics' element={<Basics user={user} basics={basics} setBasics={setBasics} setTargets={setTargets}/>} />
            <Route path='/edit-basics' element={<EditBasics user={user} basics={basics} setBasics={setBasics}/>} />

            <Route path='/your-diet' element={<YourDiet user={user} targets={targets} setMeal={setMeal} />} />
            
            <Route path='add-meal' element={<AddMeal user={user} />} />
            <Route path='edit-meal' element={<EditMeal user={user} meal={meal}/>} />
          </Routes>
      </section>

    </section>
    </>
  )
}

export default App