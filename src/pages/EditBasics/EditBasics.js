import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import EditBasicsUI from "./EditBasicsUI"

function EditBasics({ basics, backend, user }) {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        weight: basics.weight,
        goal: basics.goal,
        TDEE: basics.TDEE
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.put(backend + `basics/?username=${user}`, {
            username: user,
            weight: formData.weight,
            goal: formData.goal,
            TDEE: formData.TDEE
        })
        .then((response) => {
            if (response.data === 'successfully updated user info') {
                navigate('/basics')
            }
        })
        .catch((error) => console.log(error))
    }

    return <EditBasicsUI handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
}

export default EditBasics