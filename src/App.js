import { Route, Routes} from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/Header'
import Landing from './pages/landing/Landing'
import Auth from './pages/auth/Auth'
import Basics from './pages/basics/Basics'
import EditBasics from './pages/basics/EditBasics'
import YourDiet from './pages/diet/YourDiet'
import AddMeal from './pages/meals/AddMeal'
import EditMeal from './pages/meals/EditMeal'
import DeleteMeal from './pages/meals/DeleteMeal'

function App(props) {
  function renderUserRoutes() {
    if (props.isSignedIn) {
      return (
        <>
          <Route path='/basics' element={<Basics />} />
          <Route path='/basics/edit' element={<EditBasics />} />

          <Route path='/your-diet' element={<YourDiet />} />
          
          <Route path='meals/new' element={<AddMeal />} />
          <Route path='meals/edit/:id' element={<EditMeal />} />
          <Route path='meals/delete/:id' element={<DeleteMeal />} />
        </>
      )
    } else {
      return (
        <>
        <Route path='/:x' element={<Landing />} />
        <Route path='meals/edit/:id' element={<Landing />} />
        <Route path='/meals/delete/:id' element={<Landing />} />
        </>
      )
    }
  }

  return (
    <section className='section'>
      <Header />

      <section className='section'>
          <Routes>
            <Route exact path='/' element={<Landing />} />

            <Route path='/signup' element={<Auth page='signup'/>} />
            <Route path='/login' element={<Auth page='login'/>}/>
            {renderUserRoutes()}
          </Routes>
      </section>

    </section>
  )
}

function mapStateToProps(state) {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps)(App)