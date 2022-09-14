import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import AuthForm from './AuthForm'
import { login } from '../../actions/auth'
import { useEffect } from 'react'

function Auth(props) {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    function onSubmit(formValues) {
        dispatch(login(props.page, formValues))
    }

    useEffect(() => {if (props.isSignedIn) navigate('/basics')}, [props.isSignedIn])

    return (
        <>
        <h4 className='title is-4'>{props.page[0].toUpperCase() + props.page.slice(1)}</h4>
        <AuthForm onSubmit={onSubmit} warningMessage={props.warning} />
        </>
    )
}

function mapStateToProps(state) {
    return { 
        isSignedIn: state.auth.isSignedIn,
        warning: state.auth.warning
    }
}

export default connect(mapStateToProps, { login })(Auth)