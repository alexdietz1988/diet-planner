import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import AuthForm from "../components/AuthForm"

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
                navigate('/basics')
            }
        })
        .catch((error) => console.log(error))
    }

    return (
        <>
        <h4 className="title is-4">Login</h4>
        <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} invalidEntry={invalidEntry} />
        </>
    )
}

export default Login