function FormulaTable() {
    return (
        <table className='table'>
        <thead>
            <tr>
                <th>Diet</th>
                <th>Calories</th>
                <th>Protein (g)</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>Cut</td>
            <td>TDEE x 0.75</td>
            <td>Weight (lbs) x 1.1</td>
        </tr>
        <tr>
            <td>Bulk</td>
            <td>TDEE x 1.1</td>
            <td>Weight (lbs) x 1</td>
        </tr>
        <tr>
            <td>Maintain</td>
            <td>TDEE x 1</td>
            <td>Weight (lbs) x 1</td>
        </tr>
        </tbody>
        </table>
    )
}

export default FormulaTable