import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function EditBasics(props) {
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
        <h4 class="title is-4">Edit your basics</h4>
        <form onSubmit={handleSubmit}>
            <div class="field">
                <label class="label" htmlFor="weight">Weight</label>
                <div class="control">
                    <input class="input" type="text" name="weight" id="weight" value={formData.weight} onChange={handleChange}/>
                </div>
            </div>

            <div class="field">
                <label class="label" htmlFor="TDEE">TDEE</label>
                <div class="control">
                    <input class="input" type="text" name="TDEE" id="TDEE" value={formData.TDEE} onChange={handleChange}/>
                </div>
                <p class="help">Your TDEE is your total daily energy expenditure, or how many calories you burn in a day.</p><p class="help">You can estimate your TDEE using <a href="https://www.calculator.net/tdee-calculator.html">this tool</a> or by <a href="https://9to5mac.com/2021/12/09/apple-watch-how-to-see-calories-burned-active-and-passive/">using a fitness tracker like Apple Watch</a>.</p>
            </div>

            <div class="field">
                <label class="label" htmlFor="goal">Goal</label>
                <div class="control">
                    <div class="select">
                        <select name="goal" id="goal" value={formData.goal} onChange={handleChange}>
                            <option value="cut">Cut</option>
                            <option value="bulk">Bulk</option>
                            <option value="maintain">Maintain</option>
                        </select>
                    </div>
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
        </>
    )
}

export default EditBasics