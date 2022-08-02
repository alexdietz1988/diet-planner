import { Link } from "react-router-dom"

function EditMealUI(props) {
    return(
        <>
        <h4 className="title is-4">Edit meal</h4>

        <section className="section">
        <form onSubmit={props.handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="name">Name</label>
                <div className="control">
                    <input className="input" type="text" name="name" id="name" value={props.formData.name} onChange={props.handleChange} required/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="calories">Calories</label>
                <div className="control">
                    <input className="input" type="number" name="calories" id="calories" value={props.formData.calories} onChange={props.handleChange} required/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="protein">Protein</label>
                <div className="control">
                    <input className="input" type="number" name="protein" id="protein" value={props.formData.protein} onChange={props.handleChange} required/>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <input className="button is-link" type="submit" value="Submit" />
                </div>
                <div className="control">
                    <Link className="button is-light" to='/your-diet'>Cancel</Link>
                </div>
            </div>
        </form>
        </section>
        </>
    )
}

export default EditMealUI