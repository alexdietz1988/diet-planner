import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { createMeal } from '../../../actions/meals'
import AddMealUI from './AddMealUI'

function AddMeal(props) {
    let navigate = useNavigate()

    function onSubmit(formValues) {
        props.createMeal(formValues)
            .then(navigate('/meals'))
    }

    return <AddMealUI onSubmit={onSubmit}/>
}

export default connect(null, { createMeal })(AddMeal)