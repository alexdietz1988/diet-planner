import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import SignupUI from "./SignupUI"

function Signup(props) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [userAlreadyExists, setUserAlreadyExists] = useState(false)

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(props.backend + 'auth/signup', {
            username: formData.username,
            password: formData.password
        })
        .then((response) => {
            console.log(response.data)
            if (response.data === 'user already exists') {
                setUserAlreadyExists(true)
            }
            else if (response.data === 'user created') {
                props.setUser(formData.username)
                navigate('/basics')
            }
        })
        .catch((error) => console.log(error))
    }

    return <SignupUI handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} userAlreadyExists={userAlreadyExists} />
}

export default Signup