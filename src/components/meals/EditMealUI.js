import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Submit from '../Submit'

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
        <section className='section'>
            <h4 className='title is-4'>Edit meal</h4>
            <form onSubmit={props.handleSubmit(props.onSubmit)}>
                <Field name='name' label='Name' component={renderInput} />
                <Field name='calories' label='Calories' type='number' component={renderInput} />
                <Field name='protein' label='Protein' type='number' component={renderInput} />
                <Submit submitText='Save Changes' cancel='/meals'/>
            </form>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        initialValues: state.meals.selectedMeal
    }
}

EditMealUI = reduxForm({form: 'mealForm'})(EditMealUI)
export default connect(mapStateToProps)(EditMealUI)