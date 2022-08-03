import { Link } from "react-router-dom"

function YourDietUI(props) {
    let calorieColor = props.dietTotals.calories < props.targets.calories ? 'success' : 'danger'
    let proteinColor = props.dietTotals.protein < props.targets.protein ? 'danger' : 'success'

    let calorieDifference = props.targets.calories - props.dietTotals.calories
    let proteinDifference = props.targets.protein - props.dietTotals.protein

    return (
        <section className="section">
            <h4 className="title is-4">Your diet</h4>

            <table className="table">
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
                    <td>{meal.name}</td><td>{meal.calories}</td><td>{meal.protein} g</td>
                    <td>
                        <div className="tags">
                            <Link to='/edit-meal' onClick={() => props.setMeal(
                                {id: meal._id, name: meal.name, calories: meal.calories, protein: meal.protein})}>
                                <div className="tag is-warning mx-1">Edit</div>
                            </Link>
                            <a className="tag is-danger mx-1" onClick={() => props.deleteMeal(meal._id)}>Delete</a>
                        </div>
                    </td>
                </tr>
            ))}
            <tr>
                <td><Link to='/add-meal'><button className="button is-small is-info">Add a meal</button></Link></td>
            </tr>
            </tbody>
            
            <tfoot>
                <tr className="content">
                    <th>
                        <p className="mb-1">Totals</p>
                        <p className="has-text-weight-normal">Targets</p>
                    </th>

                    <th>
                        <p className={'has-text-' + calorieColor + ' mb-1'}>{props.dietTotals.calories}</p>
                        <p className="has-text-weight-normal">{props.targets.calories}</p>
                    </th>

                    <th>
                        <p className={'has-text-' + proteinColor + ' mb-1'}>{props.dietTotals.protein} g</p>
                        <p className="has-text-weight-normal">{props.targets.protein} g</p>
                    </th>
                </tr>
            </tfoot>
            </table>

            <div className="content">
                {calorieDifference > 0 ?
                    <p>You have room for <b>{calorieDifference}</b> more calories.</p>
                    : <p>You are <b>{-calorieDifference}</b> calories over your limit.</p>}
                {proteinDifference > 0 ?
                    <p>You need <b>{proteinDifference}</b> more grams of protein.</p>
                    : <p>You are consuming a surplus of <b>{-proteinDifference}</b> grams of protein.</p>}
            </div>

        </section>
    )
}

export default YourDietUI