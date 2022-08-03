function TableFooter(props) {
    let calorieColor = props.diet.calories < props.targets.calories ? 'success' : 'danger'
    let proteinColor = props.diet.protein < props.targets.protein ? 'danger' : 'success'

    return(
        <tfoot>
        <tr className="content">
            <th>
                <p className="mb-1">Totals</p>
                <p className="has-text-weight-normal">Targets</p>
            </th>

            <th>
                <p className={'has-text-' + calorieColor + ' mb-1'}>{props.diet.calories}</p>
                <p className="has-text-weight-normal">{props.targets.calories}</p>
            </th>

            <th>
                <p className={'has-text-' + proteinColor + ' mb-1'}>{props.diet.protein} g</p>
                <p className="has-text-weight-normal">{props.targets.protein} g</p>
            </th>
        </tr>
    </tfoot>
    )
}

export default TableFooter