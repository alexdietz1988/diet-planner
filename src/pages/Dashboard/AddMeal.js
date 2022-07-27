import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddMeal(props) {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        calories: '',
        protein: ''
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(props.backend + 'meal/?username=' + props.user, {
            username: props.user,
            name: formData.name,
            calories: formData.calories,
            protein: formData.protein
        })
        .then((response) => {
            if (response.data === 'successfully added meal') {
                navigate('/dashboard')
            }
        })
        .catch((error) => console.log(error))
    }

    return(
        <>
        <h3>Add a meal</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label><br />
                <input type="text" name="name" id="name" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="calories">Calories</label><br />
                <input type="text" name="calories" id="calories" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="protein">Protein</label><br />
                <input type="text" name="protein" id="protein" onChange={handleChange}/>
            </div>

            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
        </>
    )
}

export default AddMeal