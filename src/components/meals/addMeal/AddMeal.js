import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { createMeal } from '../../../actions/meals'
import AddMealUI from './AddMealUI'

function AddMeal(props) {
    let navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)
    function onSubmit(formValues) {
        props.createMeal(formValues)
        setSubmitted(true)
    }
    useEffect(() => {
        if (submitted) {
            navigate('/meals')
    }}, [props.fetchCount])

    return <AddMealUI onSubmit={onSubmit}/>
}

function mapStateToProps(state) {
    return {
        fetchCount: state.meals.fetchCount
    }
}

export default connect(mapStateToProps, { createMeal })(AddMeal)