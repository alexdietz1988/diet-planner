import { Field, reduxForm } from 'redux-form'
import Submit from '../../components/Submit'

function renderInput(props) {
    return(
        <div className='field'>
            <label className='label' htmlFor={props.input.name}>{props.label}</label>
            <div className='control'>
                <input className='input' type='number' {...props.input} required/>
            </div>
        </div>
    )
}

function EditBasicsUI(props) {
    return (
        <>
        <h4 className='title is-4'>Edit your basics</h4>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <Field name='weight' label='Weight' type='number' component={renderInput} />
            <Field name='TDEE' label='TDEE' type='number' component={renderInput} />
                <p className='help'>Your TDEE is your total daily energy expenditure, or how many calories you burn in a day.</p>
                <p className='help'>You can estimate your TDEE using <a href='https://www.calculator.net/tdee-calculator.html'>this tool</a> or by <a href='https://9to5mac.com/2021/12/09/apple-watch-how-to-see-calories-burned-active-and-passive/'>using a fitness tracker like Apple Watch</a>.</p>
            
            <div className='field'>
                <label className='label' htmlFor='goal'>Goal</label>
                <div className='control'>
                    <div className='select'>
                    <Field name='goal' label='Goal' component='select'>
                        <option value='cut'>Cut</option>
                        <option value='bulk'>Bulk</option>
                        <option value='maintain'>Maintain</option>
                    </Field>
                    </div>
                </div>
            </div>
            <Submit submitText='Save Changes' cancel='/basics'/>
        </form>
        </>
    )
}

export default reduxForm({form: 'editBasics'})(EditBasicsUI)