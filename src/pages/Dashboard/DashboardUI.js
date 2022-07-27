import { Link } from "react-router-dom"

function DashboardUI(props) {
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
                {props.meals.map(meal => (
                    <div key={meal._id}>
                        <p>
                            Name: {meal.name}<br />
                            Calories: {meal.calories}<br />
                            Protein: {meal.protein}
                        </p>
                        <button onClick={() => props.deleteMeal(meal._id)}>Delete Meal</button>
                        <Link to='/edit-meal' onClick={() => props.setMeal({id: meal._id, name: meal.name, calories: meal.calories, protein: meal.protein})}>
                            <button>Edit Meal</button>
                        </Link>
                    </div>
                ))}
                <Link to='/add-meal'>Add a meal</Link>
            </section>

            <section>
                <h2>Analysis</h2>
                <p>
                    Total calories: {props.calorieTotal}<br />
                    Total protein: {props.proteinTotal}
                </p>
            </section>
        </>
    )
}

export default DashboardUI