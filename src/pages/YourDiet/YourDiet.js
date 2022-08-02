import YourDietUI from "./YourDietUI"

import { useState, useEffect } from "react"
import axios from "axios"

function YourDiet(props) {
    const [meals, setMeals] = useState([])
    const [dietTotals, setDietTotals] = useState({calories: 0, protein: 0})

    function getMeals() {
        axios.get(props.backend + 'meal/?username=' + props.user)
            .then((response) => {
                let [calories, protein] = [0,0]
                for (let meal of response.data) {
                    calories += parseInt(meal.calories)
                    protein += parseInt(meal.protein)
                }
                setDietTotals({calories: calories, protein: protein})
                setMeals(response.data)
            })
            .catch((error) => console.log(error))
    }

    function deleteMeal(mealId) {
        axios.delete(props.backend + 'meal/?id=' + mealId)
            .then((response) => {
                if (response.data === 'successfully deleted meal') {
                    getMeals()
                }
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {getMeals()}, [])

    return <YourDietUI meals={meals} deleteMeal={deleteMeal} setMeal={props.setMeal} dietTotals={dietTotals} targets={props.targets}/>
}

export default YourDiet