import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"

import AuthForm from "./AuthForm"
import { login } from "../../actions"

function Auth({ page, warning }) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        login(page, formData)
        navigate('/basics')
    }

    return (
        <>
        <h4 className="title is-4">{page[0].toUpperCase() + page.slice(1)}</h4>
        <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} warning={warning} />
        </>
    )
}

function mapStateToProps(state) {
    return({
        user: state.user,
        warning: state.warning
    })
}

export default connect(mapStateToProps)(Auth)