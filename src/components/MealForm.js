import Submit from "./Submit"

function MealForm(props) {
    return(
        <>
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

            <Submit cancel="/your-diet"/>
        </form>
        </section>
        </>
    )
}

export default MealForm