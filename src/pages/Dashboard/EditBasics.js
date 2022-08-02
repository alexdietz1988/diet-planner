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
        <h4 className="title is-4">Edit your basics</h4>
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="weight">Weight</label>
                <div className="control">
                    <input className="input" type="text" name="weight" id="weight" value={formData.weight} onChange={handleChange}/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="TDEE">TDEE</label>
                <div className="control">
                    <input className="input" type="text" name="TDEE" id="TDEE" value={formData.TDEE} onChange={handleChange}/>
                </div>
                <p className="help">Your TDEE is your total daily energy expenditure, or how many calories you burn in a day.</p><p className="help">You can estimate your TDEE using <a href="https://www.calculator.net/tdee-calculator.html">this tool</a> or by <a href="https://9to5mac.com/2021/12/09/apple-watch-how-to-see-calories-burned-active-and-passive/">using a fitness tracker like Apple Watch</a>.</p>
            </div>

            <div className="field">
                <label className="label" htmlFor="goal">Goal</label>
                <div className="control">
                    <div className="select">
                        <select name="goal" id="goal" value={formData.goal} onChange={handleChange}>
                            <option value="cut">Cut</option>
                            <option value="bulk">Bulk</option>
                            <option value="maintain">Maintain</option>
                        </select>
                    </div>
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

export default EditBasics