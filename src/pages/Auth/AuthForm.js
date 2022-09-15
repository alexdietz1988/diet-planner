import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Submit from '../../components/Submit'

function renderInput(props) {
    return (
        <div className='field'>
            <label className='label' htmlFor={props.input.name}>{props.label}</label>
            <div className='control'>
                <input className='input' {...props.input} required />
            </div>
        </div>
    )
}

let AuthForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <Field name='user' component={renderInput} label='Username' />
            {props.errorMessage === 'user already exists' ? 
                <p className='help is-danger'>There's already an account with that username. If it's you, please login; otherwise, enter a different username.</p>
                : ''}
            <Field name='password' component={renderInput} label='Password' />
            <Submit cancel='/' />
            {props.errorMessage === 'invalid username or password' ? <p>Invalid username or password.</p> : ''}
        </form>
    )
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    }
}

AuthForm = reduxForm({form: 'auth'})(AuthForm)
export default connect(mapStateToProps)(AuthForm)