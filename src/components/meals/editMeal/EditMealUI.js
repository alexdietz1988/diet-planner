import { Field, reduxForm } from 'redux-form'
import Submit from '../../Submit'

function renderInput(props) {
    return(
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className='control'>
                <input className='input' {...props.input} required/>
            </div>
        </div>
    )
}

function EditMealUI(props) {
    return(
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <Field name='name' label='Name' component={renderInput} />
            <Field name='calories' label='Calories' type='number' component={renderInput} />
            <Field name='protein' label='Protein' type='number' component={renderInput} />
            <Submit submitText='Save Changes' cancel='/meals'/>
        </form>
    )
}

export default reduxForm({form: 'mealForm'})(EditMealUI)