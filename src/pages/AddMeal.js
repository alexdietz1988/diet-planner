import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import MealForm from "../components/MealForm"

function AddMeal(props) {
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
        axios.post(props.backend + 'meal/?username=' + props.user, {
            username: props.user,
            name: formData.name,
            calories: formData.calories,
            protein: formData.protein
        })
        .then((response) => {
            if (response.data === 'successfully added meal') {
                navigate('/basics')
            }
        })
        .catch((error) => console.log(error))
    }

    return (
        <>
        <h4 className="title is-4">Add a meal</h4>
        <MealForm handleChange={handleChange} handleSubmit={handleSubmit}/>
        </>
    )
}

export default AddMeal