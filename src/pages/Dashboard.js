import axios from "axios"
import { useState, useEffect } from "react"
import AddMeal from "./AddMeal"
import { Link } from "react-router-dom"

function Dashboard(props) {
    const [meals, setMeals] = useState([])

    function getUserInfo() {
        axios.get(props.backend + 'userinfo/?username=' + props.user)
            .then((response) => {
                props.setWeight(response.data.weight)
                props.setGoal(response.data.goal)
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
                <p>
                    <b>Your weight:</b> {props.weight}<br />
                    <b>Your goal:</b> {props.goal}
                </p>
                <Link to='/edit-user-info'>Update your weight or goal</Link>
            </section>

            <section>
                <h2>Your diet</h2>
                {meals.map(meal => (
                    <div key={meal._id}>
                        <p>
                            Name: {meal.name}<br />
                            Calories: {meal.calories}<br />
                            Protein: {meal.protein}
                        </p>
                    </div>
                ))}

                <h3>Add a meal</h3>
                <AddMeal backend={props.backend} user={props.user} getUserInfo={getUserInfo}/>
                
            </section>
        </>
    )
}

export default Dashboard