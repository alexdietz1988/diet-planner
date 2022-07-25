import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import UserHome from "./UserHome"

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
                navigate('/userhome')
            }
        })
        .catch((error) => console.log(error))
    }

    return(
        <>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="text">Username</label><br />
                <input type="text" name="username" id="username" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" onChange={handleChange}/>
            </div>

            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>

        {userAlreadyExists ? <p>There's already an account with that username. If it's you, please login; otherwise, enter a different username.</p> : null}
        </>
    )
}

export default Signup