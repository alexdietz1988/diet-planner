import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

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

    return(
        <>
        <h4 className="title is-4">Login</h4>
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="username">Username</label>
                <div className="control">
                    <input className="input" type="text" name="username" id="username" onChange={handleChange}/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="password">Password</label>
                <div className="control">
                    <input className="input" type="password" name="password" id="password" onChange={handleChange}/>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <input className="button is-link" type="submit" value="Submit" />
                </div>
                <div className="control">
                    <Link className="button is-light" to='/'>Cancel</Link>
                </div>
            </div>
        </form>

        {invalidEntry ? <p>Invalid username or password.</p> : null}
        </>
    )
}

export default Login