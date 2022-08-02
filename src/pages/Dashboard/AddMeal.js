import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

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
        <h4 className="title is-4">Add a meal</h4>
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="name">Name</label>
                <div className="control">
                    <input className="input" type="text" name="name" id="name" onChange={handleChange}/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="calories">Calories</label>
                <div className="control">
                    <input className="input" type="number" name="calories" id="calories" onChange={handleChange}/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="protein">Protein</label>
                <div className="control">
                    <input className="input" type="number" name="protein" id="protein" onChange={handleChange}/>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <input className="button is-link" type="submit" value="Submit" />
                </div>
                <div className="control">
                    <Link className="button is-light" to='/dashboard'>Cancel</Link>
                </div>
            </div>
        </form>
        </>
    )
}

export default AddMeal