import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Submit from '../Submit'
import { fetchMeal, editMeal } from '../../actions/meals'

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

let EditMeal = (props) => {
    const navigate = useNavigate()

    let mealId = useParams().id
    useEffect(() => props.fetchMeal(mealId), [])

    function onSubmit(formValues) {
        props.editMeal(formValues)
            .then(navigate('/meals'))
    }

    return(
        <section className='section'>
            <h4 className='title is-4'>Edit meal</h4>
            <form onSubmit={props.handleSubmit(onSubmit)}>
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

EditMeal = reduxForm({form: 'mealForm'})(EditMeal)
export default connect(mapStateToProps, { editMeal, fetchMeal })(EditMeal)