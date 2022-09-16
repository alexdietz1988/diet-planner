import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'

import { fetchMeal, editMeal } from '../../actions/meals'
import MealForm from './MealForm'

function EditMeal(props) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [submitted, setSubmitted] = useState(false)
    const initialFetchCount = useRef(props.fetchCount)

    let mealId = useParams().id
    useEffect(() => {props.fetchMeal(mealId)}, [])

    useEffect(() => {
        if (props.fetchCount > initialFetchCount.current) {
            setLoading(false)
        }
    }, [props.fetchCount])

    function onSubmit(formValues) {
        props.editMeal(formValues)
        setSubmitted(true)
    }

    useEffect(() => {
        if (submitted) {
            navigate('/meals')
        }
    }, [props.fetchCount])

    return (
        <section className='section'>
            <h4 className='title is-4'>Edit meal</h4>
            {loading ? <div>Loading...</div> : <MealForm onSubmit={onSubmit} initialValues={props.selectedMeal} />}
        </section>
    )
}

function mapStateToProps(state) {
    return {
        selectedMeal: state.meals.selectedMeal,
        fetchCount: state.meals.fetchCount
    }
}

export default connect(mapStateToProps, { editMeal, fetchMeal })(EditMeal)