import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { useState } from 'react'

import AuthForm from './AuthForm'
import { login } from '../../actions/auth'
import { useEffect } from 'react'

function Auth(props) {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [submitted, setSubmitted] = useState(false)

    function onSubmit(formValues) {
        dispatch(login(props.page, formValues))
        setSubmitted(true)
    }

    useEffect(() => {
        if (props.isSignedIn) {
            navigate('/basics')
        }
    }, [props.isSignedIn])

    return (
        <>
        <h4 className='title is-4'>{props.page[0].toUpperCase() + props.page.slice(1)}</h4>
        {submitted ? <div>Loading...</div> : <AuthForm onSubmit={onSubmit} />}
        </>
    )
}

function mapStateToProps(state) {
    return { 
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { login })(Auth)