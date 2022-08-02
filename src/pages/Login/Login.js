import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import LoginUI from "./LoginUI"

function Login(props) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [invalidEntry, setInvalidEntry] = useState(false)

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(props.backend + 'auth/login', {
            username: formData.username,
            password: formData.password
        })
        .then((response) => {
            if (response.data === 'invalid username or password') {
                setInvalidEntry(true)
            }
            else if (response.data === 'successfully logged in') {
                props.setUser(formData.username)
                navigate('/dashboard')
            }
        })
        .catch((error) => console.log(error))
    }

    return <LoginUI handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} invalidEntry={invalidEntry} />
}

export default Login