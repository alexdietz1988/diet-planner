import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Submit from '../components/Submit'
import { createMeal } from '../apis/backend'

let AddMeal = (props) => {
    let navigate = useNavigate()

    function onSubmit(formValues) {
        createMeal(props.user, formValues)
            .then(({ data }) => {
                if (data === 'success') navigate('/your-diet')
            })
            .catch((error) => console.log(error))
    }

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

    return (
        <>
        <h4 className='title is-4'>Add a meal</h4>
        <section className='section'>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <Field name='name' label='Name' component={renderInput} />
                <Field name='calories' label='Calories' type='number' component={renderInput} />
                <Field name='protein' label='Protein' type='number' component={renderInput} />
                <Submit cancel='/your-diet'/>
            </form>
        </section>
        </>
    )
}

function mapStateToProps(state) {
    return {user: state.user}
}

AddMeal = reduxForm({form: 'addMeal'})(AddMeal)
export default connect(mapStateToProps)(AddMeal)