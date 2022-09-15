import { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchMeals } from '../../actions/meals'
import TableFooter from './components/TableFooter'
import Analysis from './components/Analysis'
import TableTop from './components/TableTop'

function YourDiet(props) {
    useEffect(() => {props.fetchMeals()}, [])

    let meals = []
    for (let meal in props.meals) {
        meals.push(props.meals[meal])
    }

    return (
        <section className='section'>
            <h4 className='title is-4'>Your diet</h4>

            <table className='table'>
                <TableTop meals={meals} />
                <TableFooter diet={diet} targets={targets} />
            </table>

            <Analysis diet={diet} targets={targets} />
        </section>
    )
}

function mapStateToProps(state) {
    return {
        meals: state.meals.data,
        targets: state.basics.targets
    }
}

export default connect(mapStateToProps, { fetchMeals })(YourDiet)