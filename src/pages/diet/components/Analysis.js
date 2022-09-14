import { connect } from 'react-redux'

function Analysis(props) {
    let targetCalories = parseInt(props.basics.TDEE)
    let targetProtein = parseInt(props.basics.weight)
    
    if (props.goal === 'cut') {
        targetCalories *= 0.75
        targetProtein *= 1.1
    } else if (props.goal === 'bulk') {
        targetCalories *= 1.1
    }

    let [dietCalories, dietProtein] = [0,0]
    for (let meal of props.meals) {
        dietCalories += parseInt(meal.calories)
        dietProtein += parseInt(meal.protein)
    }

    let calorieDifference = targetCalories - dietCalories
    let proteinDifference = targetProtein - dietProtein
    
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
        basics: state.basics,
        meals: state.meals
    }
}

export default connect(mapStateToProps)(Analysis)