import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import EditBasicsUI from './EditBasicsUI'
import { requestEditBasics } from '../../apis/backend'

function EditBasics({ basics, user }) {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        weight: basics.weight,
        goal: basics.goal,
        TDEE: basics.TDEE
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        requestEditBasics(user, formData)
            .then(({ data }) => {
                if (data === 'success') navigate('/basics')
            })
            .catch((error) => console.log(error))
    }

    return <EditBasicsUI handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
}

function mapStateToProps(state) {
    return {
        user: state.user,
        basics: state.basics
    }
}

export default connect(mapStateToProps)(EditBasics)