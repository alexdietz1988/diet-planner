import axios from "axios"
import { useState, useEffect } from "react"
import EditUserInfo from "./EditUserInfo"
import AddMeal from "./AddMeal"

function UserHome(props) {

    const [weight, setWeight] = useState('')
    const [goal, setGoal] = useState('')
    const [meals, setMeals] = useState([])

    function getUserInfo() {
        axios.get(props.backend + 'userinfo/?username=' + props.user)
            .then((response) => {
                setWeight(response.data.weight)
                setGoal(response.data.goal)
            })
            .catch((error) => console.log(error))
            axios.get(props.backend + 'meal/?username=' + props.user)
            .then((response) => {
                setMeals(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {getUserInfo()}, [])

    return(
        <>
            <p><em>Logged in as {props.user}</em></p>

            <section>
                <h2>Basics</h2>
                <p><b>Your weight:</b> {weight}</p>
                <p><b>Your goal:</b> {goal}</p>

                <h3>Edit your weight and goal</h3>
                <EditUserInfo backend={props.backend} user={props.user} setWeight={setWeight} setGoal={setGoal}/>
            </section>

            <section>
                <h2>Your diet</h2>
                {meals.map(meal => (
                    <div key={meal._id}>
                        <p>Name: {meal.name}</p>
                        <p>Calories: {meal.calories}</p>
                        <p>Protein: {meal.protein}</p>
                    </div>
                ))}

                <h3>Add a meal</h3>
                <AddMeal backend={props.backend} user={props.user}/>
                
            </section>
        </>
    )
}

export default UserHome