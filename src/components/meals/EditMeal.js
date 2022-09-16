import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import { fetchMeal, editMeal } from '../../actions/meals'
import EditMealUI from './EditMealUI'

function EditMeal(props) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    let mealId = useParams().id
    useEffect(() => {props.fetchMeal(mealId)}, [])

    const myMeal = useSelector((state) => state.meals.selectedMeal)
    useEffect(() => {
        if (myMeal._id === mealId) {
            setLoading(false)
        }
    }, [myMeal])

    function onSubmit(formValues) {
        props.editMeal(formValues)
            .then(navigate('/meals'))
    }

    if (loading) {
        return <div>Loading...</div>
    } else {
        return <EditMealUI onSubmit={onSubmit} />
    }
}

export default connect(null, { editMeal, fetchMeal })(EditMeal)