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
            <section class="section">
                <h4 class="title is-4">Basics</h4>
                <ul class="block">
                    <li>You weigh <b>{props.basics.weight}</b> pounds.</li>
                    <li>You burn <b>{props.basics.TDEE}</b> calories per day.</li>
                    <li>Your current goal is to <b>{props.basics.goal}</b>.</li>
                </ul>
                
                <Link to='/edit-basics'><button class="button is-small is-warning">Update</button></Link>
            </section>

            <section class="section">
                <h4 class="title is-4">Your diet</h4>

                <table class="table">
                <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Calories</th>
                        <th>Protein</th>
                    </tr>
                </thead>
                <tbody>
                {props.meals.map(meal => (
                    <tr key={meal._id}>
                        <td>{meal.name}</td>
                        <td>{meal.calories}</td>
                        <td>{meal.protein} g</td>
                        <td>
                            <Link to='/edit-meal' onClick={() => props.setMeal({id: meal._id, name: meal.name, calories: meal.calories, protein: meal.protein})}>
                                <button class="button is-small is-warning mx-1">Edit</button>
                                <button class="button is-small is-danger mx-1" onClick={() => props.deleteMeal(meal._id)}>Delete</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td><Link to='/add-meal'><button class="button is-small is-info">Add a meal</button></Link></td>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Totals</th>
                        <th>{props.dietTotals.calories}</th>
                        <th>{props.dietTotals.protein} g</th>
                    </tr>
                    <tr>
                        <th>Targets</th>
                        <th>{props.targets.calories}</th>
                        <th>{props.targets.protein} g</th>
                    </tr>
                </tfoot>
                </table>

                <p>{calorieMessage}</p>
                <p>{proteinMessage}</p>
                
            </section>
        </>
    )
}

export default DashboardUI