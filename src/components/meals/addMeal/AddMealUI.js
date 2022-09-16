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

function AddMealUI(props) {
    return (
        <>
        <h4 className='title is-4'>Add a meal</h4>
        <section className='section'>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <Field name='name' label='Name' component={renderInput} />
            <Field name='calories' label='Calories' type='number' component={renderInput} />
            <Field name='protein' label='Protein' type='number' component={renderInput} />
            <Submit submitText='Add Meal' cancel='/meals'/>
        </form>
        </section>
        </>
    )
}

export default reduxForm({form: 'addMeal'})(AddMealUI)