import { useEffect } from 'react'
import { connect } from 'react-redux'

import YourDietUI from './YourDietUI'
import { fetchMeals, deleteMeal } from '../../apis/backend'
import { setDiet } from '../../actions'

function YourDiet({ user, setDiet }) {
    function getMeals() {
        fetchMeals(user)
            .then(({ data }) => setDiet(data))
            .catch((error) => console.log(error))
    }

    function deleteMeal(mealId) {
        deleteMeal(mealId)
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