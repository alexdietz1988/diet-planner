import axios from "axios"
import { useState } from "react"

function Signup(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        console.log(formData)
        e.preventDefault()
        axios.post(props.backend + 'auth/signup', {
            username: formData.username,
            password: formData.password
        })
        .then((response) => {
            console.log(response)
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
        </>
    )
}

export default Signup