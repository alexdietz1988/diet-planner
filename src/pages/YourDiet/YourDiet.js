import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import YourDietUI from './YourDietUI'
import { requestGetMeals, requestDeleteMeal } from '../../apis/backend'

function YourDiet(props) {
    const [meals, setMeals] = useState([])
    const [dietTotals, setDietTotals] = useState({calories: 0, protein: 0})

    function getMeals() {
        requestGetMeals(props.user)
            .then(({ data }) => {
                let [calories, protein] = [0,0]
                for (let meal of data) {
                    calories += parseInt(meal.calories)
                    protein += parseInt(meal.protein)
                }
                setDietTotals({calories: calories, protein: protein})
                setMeals(data)
            })
            .catch((error) => console.log(error))
    }

    function deleteMeal(mealId) {
        requestDeleteMeal(mealId)
            .then(({ data }) => {
                if (data === 'successfully deleted meal') {
                    getMeals()
                }
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {getMeals()}, [])
    return <YourDietUI 
        meals={meals}
        deleteMeal={deleteMeal}
        setMeal={props.setMeal}
        dietTotals={dietTotals}
        targets={props.targets}/>
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(YourDiet)