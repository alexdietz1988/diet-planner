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
                props.setTDEE(response.data.TDEE)
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

    function analyzeDiet() {
        const targets = {
            'cut': {calories: props.TDEE * 0.75, protein: props.weight * 1.1},
            'maintain': {calories: props.TDEE, protein: props.weight},
            'bulk': {calories: props.TDEE * 1.1, protein: props.weight}
        }

        let calorieTarget = targets[props.goal].calories
        let proteinTarget = targets[props.goal].protein

        let calorieDifference = calorieTarget - calorieTotal
        let proteinDifference = proteinTarget - proteinTotal

        const calorieMessage = calorieDifference > 0 ? `You have room for ${calorieDifference} more calories!` : `You are ${-1 * calorieDifference} calories over your limit!`
        const proteinMessage = proteinDifference > 0 ? `You need ${proteinDifference} more grams of protein!` : `You are getting a surplus of ${proteinDifference} grams of protein!`

        return(
            <>
            <section>
                <h3>Calories</h3>
                <p>
                    Target: {calorieTarget}, Current Intake: {calorieTotal}<br />
                    {calorieMessage}
                </p>
            </section>

            <section>
                <h3>Protein</h3>
                <p>
                    Target: {proteinTarget}, Current Intake: {proteinTotal}<br />
                    {proteinMessage}
                </p>
            </section>
            </>
        )
    }

    useEffect(() => {getUserInfo(); getMeals()}, [])

    return <DashboardUI user={props.user} weight={props.weight} goal={props.goal} TDEE={props.TDEE} meals={meals} deleteMeal={deleteMeal} setMeal={props.setMeal} calorieTotal={calorieTotal} proteinTotal={proteinTotal} analyzeDiet={analyzeDiet}/>
}

export default Dashboard