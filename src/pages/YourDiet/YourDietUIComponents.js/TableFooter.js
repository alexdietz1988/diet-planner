import { connect } from 'react-redux'

function TableFooter({targetCalories, targetProtein, dietTotals}) {
    let calorieColor = dietTotals.calories < targetCalories ? 'success' : 'danger'
    let proteinColor = dietTotals.protein < targetProtein ? 'danger' : 'success'

    return(
        <tfoot>
            <tr className="content">
                <th>
                    <p className="mb-1">Totals</p>
                    <p className="has-text-weight-normal">Targets</p>
                </th>

                <th>
                    <p className={'has-text-' + calorieColor + ' mb-1'}>{dietTotals.calories}</p>
                    <p className="has-text-weight-normal">{targetCalories}</p>
                </th>

                <th>
                    <p className={'has-text-' + proteinColor + ' mb-1'}>{dietTotals.protein} g</p>
                    <p className="has-text-weight-normal">{targetProtein} g</p>
                </th>
            </tr>
        </tfoot>
    )
}

function mapStateToProps(state) {
    return {
        targetCalories: state.basics.targetCalories,
        targetProtein: state.basics.targetProtein
    }
}

export default connect(mapStateToProps)(TableFooter)