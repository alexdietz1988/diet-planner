import { Field, reduxForm } from 'redux-form'
import Submit from '../../components/Submit'

function renderInput(props) {
    return (
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className='control'>
                <input className='input' {...props.input} required />
            </div>
        </div>
    )
}

function AuthForm(props) {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <Field name='username' component={renderInput} label='Username' />
            {props.warningMessage === 'user already exists' ? 
                <p className='help is-danger'>There's already an account with that username. If it's you, please login; otherwise, enter a different username.</p>
                : ''}
            <Field name='password' component={renderInput} label='Password' />
            <Submit cancel='/' />
            {props.warningMessage === 'invalid username or password' ? <p>Invalid username or password.</p> : ''}
        </form>
    )
}

export default reduxForm({form: 'auth'})(AuthForm)