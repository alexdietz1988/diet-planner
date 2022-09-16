import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchMeal, editMeal } from '../../../actions/meals'
import EditMealUI from './EditMealUI'

function EditMeal(props) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    let mealId = useParams().id
    useEffect(() => {props.fetchMeal(mealId)}, [])

    useEffect(() => {
        if (props.selectedMeal._id === mealId) {
            setLoading(false)
        }
    }, [props.selectedMeal])

    function onSubmit(formValues) {
        props.editMeal(formValues)
            .then(navigate('/meals'))
    }

    return (
        <section className='section'>
            <h4 className='title is-4'>Edit meal</h4>
            {loading ? <div>Loading...</div> : <EditMealUI onSubmit={onSubmit} initialValues={props.selectedMeal} />}
        </section>
    )
}

function mapStateToProps(state) {
    return {
        selectedMeal: state.meals.selectedMeal
    }
}

export default connect(mapStateToProps, { editMeal, fetchMeal })(EditMeal)