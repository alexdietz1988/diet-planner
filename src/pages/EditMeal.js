import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { connect } from 'react-redux'

import MealForm from "../components/MealForm"

function EditMeal({meal, backend, user}) {
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
        axios.put(backend + `meal/?id=${meal.id}`, {
            username: user,
            name: formData.name,
            calories: formData.calories,
            protein: formData.protein
        })
        .then((response) => {
            if (response.data === 'successfully updated meal') {
                navigate('/your-diet')
            }
        })
        .catch((error) => console.log(error))
    }

    return (
        <>
        <h4 className="title is-4">Edit meal</h4>
        <MealForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
        </>
    )
}

function mapStateToProps(state) {
    return({
        user: state.user
    })
}

export default connect(mapStateToProps)(EditMeal)