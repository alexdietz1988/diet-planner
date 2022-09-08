import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import AuthForm from './AuthForm'
import { requestLogin } from '../../apis/backend'
import { setUser } from '../../actions'

function Auth(props) {
    let navigate = useNavigate()

    const [warning, setWarning] = useState('default warning')

    function onSubmit(formValues) {
        requestLogin(props.page, formValues)
            .then((response) => {
                if (response.data === 'invalid username or password' || response.data === 'user already exists') {
                    setWarning(response.data)
                }
                else if (response.data === 'success') {
                    props.setUser(formValues.username)
                    navigate('/basics')
                }
                else setWarning('something went wrong')
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
        <h4 className='title is-4'>{props.page[0].toUpperCase() + props.page.slice(1)}</h4>
        <AuthForm onSubmit={onSubmit} warningMessage={warning} />
        </>
    )
}

function mapStateToProps(state) {
    return {user: state.user}
}

export default connect(mapStateToProps, { setUser })(Auth)