import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import UserHome from "./UserHome"

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
        console.log(formData)
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
                navigate('/userhome')
            }
        })
        .catch((error) => console.log(error))
    }

    return(
        <>
        <h2>Login</h2>
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

        {invalidEntry ? <p>Invalid username or password.</p> : null}
        </>
    )
}

export default Login