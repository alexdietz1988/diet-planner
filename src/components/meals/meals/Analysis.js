import { connect } from 'react-redux'

function Analysis({ diet, targets }) {
    let calorieDifference = targets.calories - diet.calories
    let proteinDifference = targets.protein - diet.protein
    
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
        diet: state.meals.diet,
        targets: state.basics.targets
    }
}

export default connect(mapStateToProps)(Analysis)