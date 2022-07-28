import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function EditUserInfo(props) {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        weight: props.basics.weight,
        goal: props.basics.goal,
        TDEE: props.basics.TDEE
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
            goal: formData.goal,
            TDEE: formData.TDEE
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
        <h3>Edit your basics</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="weight">Weight</label><br />
                <input type="text" name="weight" id="weight" value={formData.weight} onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="TDEE">TDEE</label><br />
                <input type="text" name="TDEE" id="TDEE" value={formData.TDEE} onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="goal">Goal</label><br />
                <select name="goal" id="goal" value={formData.goal} onChange={handleChange}>
                    <option value="cut">Cut</option>
                    <option value="bulk">Bulk</option>
                    <option value="maintain">Maintain</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
        </>
    )
}

export default EditUserInfo