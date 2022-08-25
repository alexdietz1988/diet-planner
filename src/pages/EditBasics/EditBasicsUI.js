import Submit from '../../components/Submit'

function EditBasicsUI({ formData, handleChange, handleSubmit }) {
    return(
        <>
        <h4 className='title is-4'>Edit your basics</h4>
        <form onSubmit={handleSubmit}>
            <div className='field'>
                <label className='label' htmlFor='weight'>Weight</label>
                <div className='control'>
                    <input className='input' type='number' name='weight' id='weight' value={formData.weight} onChange={handleChange} required/>
                </div>
            </div>

            <div className='field'>
                <label className='label' htmlFor='TDEE'>TDEE</label>
                <div className='control'>
                    <input className='input' type='number' name='TDEE' id='TDEE' value={formData.TDEE} onChange={handleChange} required/>
                </div>
                <p className='help'>Your TDEE is your total daily energy expenditure, or how many calories you burn in a day.</p>
                <p className='help'>You can estimate your TDEE using <a href='https://www.calculator.net/tdee-calculator.html'>this tool</a> or by <a href='https://9to5mac.com/2021/12/09/apple-watch-how-to-see-calories-burned-active-and-passive/'>using a fitness tracker like Apple Watch</a>.</p>
            </div>

            <div className='field'>
                <label className='label' htmlFor='goal'>Goal</label>
                <div className='control'>
                    <div className='select'>
                        <select name='goal' id='goal' value={formData.goal} onChange={handleChange}>
                            <option value='cut'>Cut</option>
                            <option value='bulk'>Bulk</option>
                            <option value='maintain'>Maintain</option>
                        </select>
                    </div>
                </div>
            </div>

            <Submit cancel='/basics'/>
        </form>
        </>
    )
}

export default EditBasicsUI