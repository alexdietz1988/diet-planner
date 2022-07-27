import axios from "axios"
import { useState, useEffect } from "react"
import DashboardUI from "./DashboardUI"

function Dashboard(props) {
    const [meals, setMeals] = useState([])
    const [calorieTotal, setCalorieTotal] = useState(0)
    const [proteinTotal, setProteinTotal] = useState(0)

    function getUserInfo() {
        axios.get(props.backend + 'userinfo/?username=' + props.user)
            .then((response) => {
                props.setWeight(response.data.weight)
                props.setGoal(response.data.goal)
            })
            .catch((error) => console.log(error))
    }

    function getMeals() {
        axios.get(props.backend + 'meal/?username=' + props.user)
            .then((response) => {
                let [calories, protein] = [0,0]
                for (let meal of response.data) {
                    calories += parseInt(meal.calories)
                    protein += parseInt(meal.protein)
                }
                setCalorieTotal(calories)
                setProteinTotal(protein)
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

    useEffect(() => {getUserInfo(); getMeals()}, [])

    return <DashboardUI user={props.user} weight={props.weight} goal={props.goal} meals={meals} deleteMeal={deleteMeal} setMeal={props.setMeal} calorieTotal={calorieTotal} proteinTotal={proteinTotal}/>
}

export default Dashboard