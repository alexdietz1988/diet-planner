import { Link } from "react-router-dom"

function EditBasicsUI(props) {
    return(
        <>
        <h4 className="title is-4">Edit your basics</h4>
        <form onSubmit={props.handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="weight">Weight</label>
                <div className="control">
                    <input className="input" type="number" name="weight" id="weight" value={props.formData.weight} onChange={props.handleChange} required/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="TDEE">TDEE</label>
                <div className="control">
                    <input className="input" type="number" name="TDEE" id="TDEE" value={props.formData.TDEE} onChange={props.handleChange} required/>
                </div>
                <p className="help">Your TDEE is your total daily energy expenditure, or how many calories you burn in a day.</p><p className="help">You can estimate your TDEE using <a href="https://www.calculator.net/tdee-calculator.html">this tool</a> or by <a href="https://9to5mac.com/2021/12/09/apple-watch-how-to-see-calories-burned-active-and-passive/">using a fitness tracker like Apple Watch</a>.</p>
            </div>

            <div className="field">
                <label className="label" htmlFor="goal">Goal</label>
                <div className="control">
                    <div className="select">
                        <select name="goal" id="goal" value={props.formData.goal} onChange={props.handleChange}>
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

export default EditBasicsUI