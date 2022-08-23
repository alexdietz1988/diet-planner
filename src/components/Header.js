import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { logout } from "../actions"

function Header({ user }) {

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
                <div className="level-item"><em className="tag">logged in as {user}</em></div>
                <div className="level-item button"><Link to='/' onClick={() => logout()}>Logout</Link></div>
            </div>
            </>
        )
    }

    return(
        <nav className="level">
        {user === '' ? notSignedIn() : signedIn()}
        </nav>
    )
}

function mapStateToProps(state) {
    return { user: state.user }
}

export default connect(mapStateToProps)(Header)