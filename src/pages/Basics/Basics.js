import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBasics } from '../../actions/basics'

function Basics(props) {
    useEffect(() => {props.fetchBasics()}, [])

    return(
        <section className='section'>
            <h4 className='title is-4'>Basics</h4>
            <div className='content'>
                <p>You weigh <b>{props.basics.weight}</b> pounds.</p>
                <p>You burn <b>{props.basics.TDEE}</b> calories per day.</p>
                <p>Your current goal is to <b>{props.basics.goal}</b>.</p>
            </div>
            
            <Link to='/edit-basics'><button className='button is-warning'>Update</button></Link>
        </section>
    )
}

function mapStateToProps(state) {
    return {basics: state.basics}
}

export default connect(mapStateToProps, { fetchBasics })(Basics)