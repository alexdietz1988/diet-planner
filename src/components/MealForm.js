import Submit from './Submit'

function MealForm({ formData, handleChange, handleSubmit }) {
    return(
        <>
        <section className='section'>
        <form onSubmit={handleSubmit}>
            <div className='field'>
                <label className='label' htmlFor='name'>Name</label>
                <div className='control'>
                    <input className='input' type='text' name='name' id='name' value={formData.name} onChange={handleChange} required/>
                </div>
            </div>

            <div className='field'>
                <label className='label' htmlFor='calories'>Calories</label>
                <div className='control'>
                    <input className='input' type='number' name='calories' id='calories' value={formData.calories} onChange={handleChange} required/>
                </div>
            </div>

            <div className='field'>
                <label className='label' htmlFor='protein'>Protein</label>
                <div className='control'>
                    <input className='input' type='number' name='protein' id='protein' value={formData.protein} onChange={handleChange} required/>
                </div>
            </div>

            <Submit cancel='/your-diet'/>
        </form>
        </section>
        </>
    )
}

export default MealForm