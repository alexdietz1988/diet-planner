import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import EditMealUI from "./EditMealUI"

function EditMeal(props) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: props.meal.name,
        calories: props.meal.calories,
        protein: props.meal.protein
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.put(props.backend + 'meal/?id=' + props.meal.id, {
            username: props.user,
            name: formData.name,
            calories: formData.calories,
            protein: formData.protein
        })
        .then((response) => {
            if (response.data === 'successfully updated meal') {
                navigate('/dashboard')
            }
        })
        .catch((error) => console.log(error))
    }

    return <EditMealUI handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
}

export default EditMeal