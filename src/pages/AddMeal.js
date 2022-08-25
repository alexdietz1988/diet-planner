import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import MealForm from '../components/MealForm'
import { requestAddMeal } from '../apis/backend'

function AddMeal({ user }) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        calories: '',
        protein: ''
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        requestAddMeal(user, formData)
            .then(({ data }) => {
                if (data === 'success') navigate('/your-diet')
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
        <h4 className='title is-4'>Add a meal</h4>
        <MealForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </>
    )
}

function mapStateToProps(state) {
    return {user: state.user}
}

export default connect(mapStateToProps)(AddMeal)