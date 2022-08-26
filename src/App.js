import { Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Basics from './pages/Basics/Basics'
import EditBasics from './pages/EditBasics/EditBasics'
import YourDiet from './pages/YourDiet/YourDiet'
import AddMeal from './pages/AddMeal'
import EditMeal from './pages/EditMeal'

function App() {
  return (
    <>
    <section className='section'>
      <Header />

      <section className='section'>
          <Routes>
            <Route exact path='/' element={<Landing />} />

            <Route path='/signup' element={<Auth page='signup'/>} />
            <Route path='/login' element={<Auth page='login'/>}/>

            <Route path='/basics' element={<Basics />} />
            <Route path='/edit-basics' element={<EditBasics />} />

            <Route path='/your-diet' element={<YourDiet />} />
            
            <Route path='add-meal' element={<AddMeal />} />
            <Route path='edit-meal' element={<EditMeal />} />
          </Routes>
      </section>

    </section>
    </>
  )
}

export default App