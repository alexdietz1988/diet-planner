import { connect } from 'react-redux'

function Analysis({ targetCalories, targetProtein, dietTotals }) {
    let calorieDifference = targetCalories - dietTotals.calories
    let proteinDifference = targetProtein - dietTotals.protein
    
    return (
        <div className='content'>
                {calorieDifference > 0 ?
                    <p>You have room for <b>{calorieDifference}</b> more calories.</p>
                    : <p>You are <b>{-calorieDifference}</b> calories over your limit.</p>}
                {proteinDifference > 0 ?
                    <p>You need <b>{proteinDifference}</b> more grams of protein.</p>
                    : <p>You are consuming a surplus of <b>{-proteinDifference}</b> grams of protein.</p>}
            </div>
    )
}

function mapStateToProps(state) {
    return {
        targetCalories: state.basics.targetCalories,
        targetProtein: state.basics.targetProtein
    }
}

export default connect(mapStateToProps)(Analysis)