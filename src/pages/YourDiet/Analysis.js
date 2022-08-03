function Analysis(props) {
    let calorieDifference = props.targets.calories - props.diet.calories
    let proteinDifference = props.targets.protein - props.diet.protein
    
    return (
        <div className="content">
                {calorieDifference > 0 ?
                    <p>You have room for <b>{calorieDifference}</b> more calories.</p>
                    : <p>You are <b>{-calorieDifference}</b> calories over your limit.</p>}
                {proteinDifference > 0 ?
                    <p>You need <b>{proteinDifference}</b> more grams of protein.</p>
                    : <p>You are consuming a surplus of <b>{-proteinDifference}</b> grams of protein.</p>}
            </div>
    )
}

export default Analysis