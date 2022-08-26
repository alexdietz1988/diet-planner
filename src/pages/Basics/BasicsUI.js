import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function BasicsUI({ basics }) {
    return(
        <section className='section'>
            <h4 className='title is-4'>Basics</h4>
            <div className='content'>
                <p>You weigh <b>{basics.weight}</b> pounds.</p>
                <p>You burn <b>{basics.TDEE}</b> calories per day.</p>
                <p>Your current goal is to <b>{basics.goal}</b>.</p>
            </div>
            
            <Link to='/edit-basics'><button className='button is-warning'>Update</button></Link>
        </section>
    )
}

function mapStateToProps(state) {
    return {basics: state.basics}
}

export default connect(mapStateToProps)(BasicsUI)