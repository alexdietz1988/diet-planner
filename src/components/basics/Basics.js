import { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBasics } from '../../actions/basics'

function Basics(props) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {props.fetchBasics()}, [])
    const initialFetchCount = useRef(props.fetchCount)

    useEffect(() => {
        if (props.fetchCount > initialFetchCount.current) {
            setLoading(false)
        }
    }, [props.fetchCount])

    function renderContent() {
        return(
            <>
            <div className='content'>
                <p>You weigh <b>{props.basics.weight}</b> pounds.</p>
                <p>You burn <b>{props.basics.TDEE}</b> calories per day.</p>
                <p>Your current goal is to <b>{props.basics.goal}</b>.</p>
            </div>
            
            <Link to='/basics/edit'><button className='button is-warning'>Update</button></Link>
            </>
        )
    }

    return(
        <section className='section'>
            <h4 className='title is-4'>Basics</h4>
            {loading ? <div>Loading...</div> : renderContent()}
        </section>
    )
}

function mapStateToProps(state) {
    return {
        basics: state.basics.data,
        fetchCount: state.basics.fetchCount
    }
}

export default connect(mapStateToProps, { fetchBasics })(Basics)