import { Link } from "react-router-dom"

function YourDietUI(props) {
    function calorieMessage() {
        let calorieDifference = props.targets.calories - props.dietTotals.calories

        if (calorieDifference > 0) return <p>You have room for <b>{calorieDifference}</b> more calories.</p>
        return <p>You are <b>{-calorieDifference}</b> calories over your limit.</p>
    }

    function proteinMessage() {
        let proteinDifference = props.targets.protein - props.dietTotals.protein

        if (proteinDifference > 0) return <p>You need <b>{proteinDifference}</b> more grams of protein.</p>
        return <p>You are consuming a surplus of <b>{-proteinDifference}</b> grams of protein.</p>
    }

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
                    <td>{meal.name}</td>
                    <td>{meal.calories}</td>
                    <td>{meal.protein} g</td>
                    <td>
                        <div className="tags">
                            <Link to='/edit-meal' onClick={() => props.setMeal({id: meal._id, name: meal.name, calories: meal.calories, protein: meal.protein})}>
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
                        {props.dietTotals.calories < props.targets.calories ?
                            <><p className="has-text-success mb-1">{props.dietTotals.calories}</p></> 
                            : <><p className="has-text-danger mb-1">{props.dietTotals.calories}</p></>
                        }
                        <p className="has-text-weight-normal">{props.targets.calories}</p>
                    </th>

                    <th>
                        {props.dietTotals.protein < props.targets.protein ?
                            <><p className="has-text-danger mb-1">{props.dietTotals.protein} g</p></> 
                            : <><p className="has-text-success mb-1">{props.dietTotals.protein} g</p></>
                        }
                        <p className="has-text-weight-normal">{props.targets.protein} g</p>
                    </th>
                </tr>
            </tfoot>
            </table>

            <div className="content">
                {calorieMessage()}
                {proteinMessage()}
            </div>

        </section>
    )
}

export default YourDietUI