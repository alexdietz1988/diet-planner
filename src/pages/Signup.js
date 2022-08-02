import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import AuthForm from "../components/AuthForm"

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

    return (
        <>
        <h4 className="title is-4">Signup</h4>
        <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} userAlreadyExists={userAlreadyExists} />
        </>
    )
}

export default Signup