// POST '/auth/signup'
// POST '/auth/login'
// username, password

import './App.css'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App;
