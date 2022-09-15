import { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchMeals } from '../../actions/meals'
import TableFooter from './components/TableFooter'
import Analysis from './components/Analysis'
import TableTop from './components/TableTop'

function Meals(props) {
    useEffect(() => {props.fetchMeals()}, [])

    return (
        <section className='section'>
            <h4 className='title is-4'>Your diet</h4>

            <table className='table'>
                <TableTop />
                <TableFooter />
            </table>

            <Analysis />
        </section>
    )
}

export default connect(null, { fetchMeals })(Meals)