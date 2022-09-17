import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import Submit from '../Submit'

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
        <Form 
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name='user' component={renderInput} label='Username' type='text' />
                    {props.errorMessage === 'user already exists' ? 
                        <p className='help is-danger'>There's already an account with that username. If it's you, please login; otherwise, enter a different username.</p>
                        : ''}
                    <Field name='password' label='Password' type='password' component={renderInput} />
                    <Submit submitText='Submit' cancel='/' />
                    {props.errorMessage === 'invalid username or password' ? <p>Invalid username or password.</p> : ''}
                </form>
            )}
        />

    )
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    }
}

export default connect(mapStateToProps)(AuthForm)