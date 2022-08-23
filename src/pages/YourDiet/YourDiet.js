import { useState, useEffect } from "react"
import axios from "axios"
import { connect } from 'react-redux'

import YourDietUI from "./YourDietUI"

function YourDiet({ user, backend, setMeal, targets }) {
    const [meals, setMeals] = useState([])
    const [diet, setDiet] = useState({calories: 0, protein: 0})

    function getMeals() {
        axios.get(backend + `meal/?username=${user}`)
            .then((response) => {
                let [calories, protein] = [0,0]
                for (let meal of response.data) {
                    calories += parseInt(meal.calories)
                    protein += parseInt(meal.protein)
                }
                setDiet({calories: calories, protein: protein})
                setMeals(response.data)
            })
            .catch((error) => console.log(error))
    }

    function deleteMeal(mealId) {
        axios.delete(backend + `meal/?id=${mealId}`)
            .then((response) => {
                if (response.data === 'successfully deleted meal') {
                    getMeals()
                }
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {getMeals()}, [])

    return <YourDietUI meals={meals} deleteMeal={deleteMeal} setMeal={setMeal} diet={diet} targets={targets}/>
}

function mapStateToProps(state) {
    return({
        user: state.user
    })
}

export default connect(mapStateToProps)(YourDiet)