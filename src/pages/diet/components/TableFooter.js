function TableFooter({targetCalories, targetProtein, dietCalories, dietProtein}) {
    let calorieColor = dietCalories < targetCalories ? 'success' : 'danger'
    let proteinColor = dietProtein < targetProtein ? 'danger' : 'success'

    return(
        <tfoot>
            <tr className="content">
                <th>
                    <p className="mb-1">Totals</p>
                    <p className="has-text-weight-normal">Targets</p>
                </th>

                <th>
                    <p className={'has-text-' + calorieColor + ' mb-1'}>{dietCalories}</p>
                    <p className="has-text-weight-normal">{targetCalories}</p>
                </th>

                <th>
                    <p className={'has-text-' + proteinColor + ' mb-1'}>{dietProtein} g</p>
                    <p className="has-text-weight-normal">{targetProtein} g</p>
                </th>
            </tr>
        </tfoot>
    )
}

export default TableFooter