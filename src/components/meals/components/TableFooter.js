import { connect } from 'react-redux'

function TableFooter({ diet, targets }) {
    let calorieColor = diet.calories < targets.calories ? 'success' : 'danger'
    let proteinColor = diet.protein < targets.protein ? 'danger' : 'success'

    return(
        <tfoot>
            <tr className="content">
                <th>
                    <p className="mb-1">Totals</p>
                    <p className="has-text-weight-normal">Targets</p>
                </th>

                <th>
                    <p className={'has-text-' + calorieColor + ' mb-1'}>{diet.calories}</p>
                    <p className="has-text-weight-normal">{targets.calories}</p>
                </th>

                <th>
                    <p className={'has-text-' + proteinColor + ' mb-1'}>{diet.protein} g</p>
                    <p className="has-text-weight-normal">{targets.protein} g</p>
                </th>
            </tr>
        </tfoot>
    )
}

function mapStateToProps(state) {
    return {
        diet: state.meals.diet,
        targets: state.basics.targets
    }
}

export default connect(mapStateToProps)(TableFooter)