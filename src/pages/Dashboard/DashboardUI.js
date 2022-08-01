import { Link } from "react-router-dom"

function DashboardUI(props) {

    function calorieMessage() {
        let calorieDifference = props.targets.calories - props.dietTotals.calories

        if (calorieDifference > 0) return <li>You have room for <b>{calorieDifference}</b> more calories.</li>
        return <li>You are <b>{-calorieDifference}</b> calories over your limit.</li>
    }

    function proteinMessage() {
        let proteinDifference = props.targets.protein - props.dietTotals.protein

        if (proteinDifference > 0) return <li>You need <b>{proteinDifference}</b> more grams of protein.</li>
        return <li>You are consuming a surplus of <b>{-proteinDifference}</b> grams of protein.</li>
    }

    return(
        <>
            <section class="section">
                <h4 class="title is-4">Basics</h4>
                <div class="content">
                <ul>
                    <li>You weigh <b>{props.basics.weight}</b> pounds.</li>
                    <li>You burn <b>{props.basics.TDEE}</b> calories per day.</li>
                    <li>Your current goal is to <b>{props.basics.goal}</b>.</li>
                </ul>
                </div>
                
                <Link to='/edit-basics'><button class="button is-warning">Update</button></Link>
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
                            <div class="tags">
                                <Link to='/edit-meal' onClick={() => props.setMeal({id: meal._id, name: meal.name, calories: meal.calories, protein: meal.protein})}>
                                    <div class="tag is-warning mx-1">Edit</div>
                                </Link>
                                <a class="tag is-danger mx-1" onClick={() => props.deleteMeal(meal._id)}>Delete</a>
                            </div>
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

                <div class="content">
                
                    <ul>
                    {calorieMessage()}
                    {proteinMessage()}
                    </ul>
                </div>

            </section>

        </>
    )
}

export default DashboardUI