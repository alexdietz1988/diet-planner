import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions'

function Header(props) {

    function notSignedIn() {
        return(
            <>
            <div className="level-left">
                <Link className="level-item has-text-black" to='/'><b>Diet Planner</b></Link>
            </div>
            
            <div className="level-right">
                <Link className="level-item button is-link" to='/signup'>Signup</Link>
                <Link className="level-item button" to='/login'>Login</Link>
            </div>
            </>
        )
    }

    function signedIn() {
        return(
            <>
            <div className="level-left">
                <div className="level-item"><Link className="has-text-black" to='/'><b>Diet Planner</b></Link></div>
                <div className="level-item"><Link to='/basics'>Basics</Link></div>
                <div className="level-item"><Link to='/your-diet'>Your Diet</Link></div>
            </div>

            <div className="level-right">
                <div className="level-item"><em className="tag">logged in as {props.user}</em></div>
                <div className="level-item button"><Link to='/' onClick={() => props.logout()}>Logout</Link></div>
            </div>
            </>
        )
    }

    return(
        <nav className="level">
        {props.isSignedIn ? signedIn() : notSignedIn()}
        </nav>
    )
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { logout })(Header)