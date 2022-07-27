import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function EditUserInfo(props) {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        weight: props.weight,
        goal: props.goal
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.put(props.backend + 'userinfo/?username=' + props.user, {
            username: props.user,
            weight: formData.weight,
            goal: formData.goal
        })
        .then((response) => {
            if (response.data === 'successfully updated user info') {
                navigate('/dashboard')
            }
        })
        .catch((error) => console.log(error))
    }

    return(
        <>
        <h3>Edit your weight and goal</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="weight">Weight</label><br />
                <input type="text" name="weight" id="weight" value={formData.weight} onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="goal">Goal</label><br />
                <input type="text" name="goal" id="goal" value={formData.goal} onChange={handleChange}/>
            </div>

            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
        </>
    )
}

export default EditUserInfo