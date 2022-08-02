import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import AddMealUI from "./AddMealUI"

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

    return <AddMealUI handleChange={handleChange} handleSubmit={handleSubmit}/>
}

export default AddMeal