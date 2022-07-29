import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

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
        <h4 class="title is-4">Edit meal</h4>

        <section class="section">
        <form onSubmit={handleSubmit}>
            <div class="field">
                <label class="label" htmlFor="name">Name</label>
                <div class="control">
                    <input class="input" type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>
                </div>
            </div>

            <div class="field">
                <label class="label" htmlFor="calories">Calories</label>
                <div class="control">
                    <input class="input" type="number" name="calories" id="calories" value={formData.calories} onChange={handleChange}/>
                </div>
            </div>

            <div class="field">
                <label class="label" htmlFor="protein">Protein</label>
                <div class="control">
                    <input class="input" type="number" name="protein" id="protein" value={formData.protein} onChange={handleChange}/>
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <input class="button is-link" type="submit" value="Submit" />
                </div>
                <div class="control">
                    <Link class="button is-light" to='/dashboard'>Cancel</Link>
                </div>
            </div>
        </form>
        </section>
        </>
    )
}

export default EditMeal