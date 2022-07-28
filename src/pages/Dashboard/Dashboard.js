import axios from "axios"
import { useState, useEffect } from "react"
import DashboardUI from "./DashboardUI"

function Dashboard(props) {
    const [meals, setMeals] = useState([])
    const [dietTotals, setDietTotals] = useState({calories: 0, protein: 0})
    const [targets, setTargets] = useState({calories: 0, protein: 0})

    function getUserInfo() {
        axios.get(props.backend + 'userinfo/?username=' + props.user)
            .then((response) => {
                props.setBasics({weight: parseInt(response.data.weight), goal: response.data.goal, TDEE: parseInt(response.data.TDEE)})
                switch(props.goal) {
                    case 'cut': setTargets({calories: props.basics.TDEE * 0.75, protein: props.basics.weight * 1.1}); break
                    case 'bulk': setTargets({calories: props.basics.TDEE * 1.1, protein: props.basics.weight}); break
                    default: setTargets({calories: props.basics.TDEE, protein: props.basics.weight})
                }
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

    useEffect(() => {getUserInfo(); getMeals()}, [])

    return <DashboardUI user={props.user} basics={props.basics} meals={meals} deleteMeal={deleteMeal} setMeal={props.setMeal} dietTotals={dietTotals} targets={targets}/>
}

export default Dashboard