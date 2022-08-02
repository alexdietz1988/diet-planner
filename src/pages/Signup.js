import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

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
                navigate('/dashboard')
            }
        })
        .catch((error) => console.log(error))
    }

    return(
        <>
        <h4 className="title is-4">Signup</h4>
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="username">Username</label>
                <div className="control">
                    <input className="input" type="text" name="username" id="username" onChange={handleChange}/>
                </div>
                {userAlreadyExists ? <p className="help is-danger">There's already an account with that username. If it's you, please login; otherwise, enter a different username.</p> : null}
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
        </>
    )
}

export default Signup