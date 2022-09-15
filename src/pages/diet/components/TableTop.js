import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteMeal } from '../../../actions/meals'

function TableTop(props) {
    return(
        <>
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
                        <div className='tags'>
                            <Link to={`/meals/edit/${meal._id}`}>
                                <div className='tag is-warning mx-1'>Edit</div>
                            </Link>
                            <a className='tag is-danger mx-1' onClick={() => props.deleteMeal(meal._id)}>Delete</a>
                        </div>
                    </td>
                </tr>
            ))}
            <tr>
                <td><Link to='/meals/new'><button className='button is-small is-info'>Add a meal</button></Link></td>
            </tr>
        </tbody>
        </>
    )
}

function mapStateToProps(state) {
    return {
        meals: state.meals.data
    }
}

export default connect(mapStateToProps, { deleteMeal })(TableTop)