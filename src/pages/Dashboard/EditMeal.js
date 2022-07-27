import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function EditMeal(props) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: props.meal.name,
        calories: props.meal.calories,
        protein: props.meal.protein
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        axios.put(props.backend + 'meal/?id=' + props.meal.id, {
            username: props.user,
            name: formData.name,
            calories: formData.calories,
            protein: formData.protein
        })
        .then((response) => {
            if (response.data === 'successfully updated meal') {
                navigate('/dashboard')
            }
        })
        .catch((error) => console.log(error))
    }

    return(
        <>
        <h3>Edit meal</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label><br />
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="calories">Calories</label><br />
                <input type="text" name="calories" id="calories" value={formData.calories} onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="protein">Protein</label><br />
                <input type="text" name="protein" id="protein" value={formData.protein} onChange={handleChange}/>
            </div>

            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
        </>
    )
}

export default EditMeal