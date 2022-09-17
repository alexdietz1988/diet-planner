import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/auth'

function Header(props) {
    const navigate = useNavigate()

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
                <div className="level-item"><Link to='/meals'>Your Diet</Link></div>
            </div>

            <div className="level-right">
                <div className="level-item"><em className="tag">logged in as {props.user}</em></div>
                <div className="level-item button is-dark" onClick={() => {
                    props.logout()
                    navigate('/')
                }}>Logout</div>
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