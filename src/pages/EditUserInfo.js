import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function EditUserInfo(props) {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        weight: '',
        goal: ''
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
                props.setWeight(formData.weight)
                props.setGoal(formData.goal)
                navigate('/userhome')
            }
        })
        .catch((error) => console.log(error))
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="weight">Weight</label><br />
                <input type="text" name="weight" id="weight" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="goal">Goal</label><br />
                <input type="text" name="goal" id="goal" onChange={handleChange}/>
            </div>

            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default EditUserInfo