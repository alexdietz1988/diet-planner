import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import MealForm from '../components/MealForm'
import { requestEditMeal } from '../apis/backend'

function EditMeal({meal, user}) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: meal.name,
        calories: meal.calories,
        protein: meal.protein
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        requestEditMeal(user, meal.id, formData)
            .then(({ data }) => {
                if (data === 'successfully updated meal') {
                    navigate('/your-diet')
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
        <h4 className='title is-4'>Edit meal</h4>
        <MealForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
        </>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(EditMeal)