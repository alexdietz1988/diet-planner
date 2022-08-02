import { Link } from "react-router-dom"

function AddMealUI(props) {
    return(
        <>
        <h4 className="title is-4">Add a meal</h4>
        <form onSubmit={props.handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="name">Name</label>
                <div className="control">
                    <input className="input" type="text" name="name" id="name" onChange={props.handleChange}/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="calories">Calories</label>
                <div className="control">
                    <input className="input" type="number" name="calories" id="calories" onChange={props.handleChange}/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="protein">Protein</label>
                <div className="control">
                    <input className="input" type="number" name="protein" id="protein" onChange={props.handleChange}/>
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

export default AddMealUI