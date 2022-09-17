import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchMeals } from '../../../actions/meals'
import TableFooter from './TableFooter'
import Analysis from './Analysis'
import TableTop from './TableTop'

function Meals(props) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {props.fetchMeals()}, [])
    useEffect(() => {setLoading(false)}, [props.fetchCount])

    function renderContent() {
        return(
            <>
            <table className='table'>
                <TableTop />
                <TableFooter />
            </table>
            <Analysis />
            </>
        )
    }
    
    return (
        <section className='section'>
            <h4 className='title is-4'>Your diet</h4>
            {loading ? <div>Loading...</div> : renderContent()}
        </section>
    )
}

function mapStateToProps(state) {
    return {
        fetchCount: state.meals.fetchCount
    }
}

export default connect(mapStateToProps, { fetchMeals })(Meals)