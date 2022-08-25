import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import AuthForm from './AuthForm'
import { requestLogin } from '../../apis/backend'
import { setUser } from '../../actions'

function Auth(props) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [warning, setWarning] = useState('')

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        requestLogin(props.page, formData)
            .then(({ data }) => {
                if (data === 'invalid username or password' || data === 'user already exists') {
                    setWarning(data)
                }
                else {
                    props.setUser(formData.username)
                    navigate('/basics')
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
        <h4 className="title is-4">{props.page[0].toUpperCase() + props.page.slice(1)}</h4>
        <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} warning={warning} />
        </>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { setUser })(Auth)