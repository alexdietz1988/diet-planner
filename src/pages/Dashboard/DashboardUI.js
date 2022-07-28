import { Link } from "react-router-dom"

function DashboardUI(props) {
    let calorieDifference = props.targets.calories - props.dietTotals.calories
    let proteinDifference = props.targets.protein - props.dietTotals.protein
    
    let calorieMessage = calorieDifference > 0 ?
        `You have room for ${calorieDifference} more calories!`
        : `You are ${-1 * calorieDifference} calories over your limit!`

    let proteinMessage = proteinDifference > 0 ?
        `You need ${proteinDifference} more grams of protein!`
        : `You are consuming a surplus of ${-1 * proteinDifference} grams of protein!`

    return(
        <>
            <p><em>Logged in as {props.user}</em></p>

            <section>
                <h2>Basics</h2>
                <p>
                    <b>Your weight:</b> {props.basics.weight}<br />
                    <b>Your goal:</b> {props.basics.goal}<br />
                    <b>Your TDEE:</b> {props.basics.TDEE}
                </p>
                <Link to='/edit-user-info'><button>Update</button></Link>
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

                <div>
                    <h3>Calories</h3>
                    <p>
                        Target: {props.targets.calories}, Current Intake: {props.dietTotals.calories}<br />
                        {calorieMessage}
                    </p>
                </div>

                <div>
                    <h3>Protein</h3>
                    <p>
                        Target: {props.targets.protein}, Current Intake: {props.dietTotals.protein}<br />
                        {proteinMessage}
                    </p>
                </div>

            </section>
        </>
    )
}

export default DashboardUI