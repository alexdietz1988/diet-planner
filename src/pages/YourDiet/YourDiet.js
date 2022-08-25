import { useEffect } from 'react'
import { connect } from 'react-redux'

import YourDietUI from './YourDietUI'
import { requestGetMeals, requestDeleteMeal } from '../../apis/backend'
import { setDiet } from '../../actions'

function YourDiet({ user, setDiet }) {
    function getMeals() {
        requestGetMeals(user)
            .then(({ data }) => setDiet(data))
            .catch((error) => console.log(error))
    }

    function deleteMeal(mealId) {
        requestDeleteMeal(mealId)
            .then(({ data }) => {
                if (data === 'success') getMeals()
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {getMeals()}, [])

    return <YourDietUI deleteMeal={deleteMeal}/>
}

function mapStateToProps(state) {
    return { user: state.user }
}

export default connect(mapStateToProps, { setDiet })(YourDiet)