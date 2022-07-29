import { Link } from "react-router-dom"

function Header(props) {

    function notSignedIn() {
        return(
            <>
            <div class="level-left">
                <Link class="level-item" to='/'><b>Diet Planner</b></Link>
            </div>
            
            <div class="level-right">
                <Link class="level-item button is-link" to='/signup'>Signup</Link>
                <Link class="level-item button" to='/login'>Login</Link>
            </div>
            </>
        )
    }

    function signedIn() {
        return(
            <>
            <div class="level-left">
                <div class="level-item"><Link class="has-text-black" to='/'><b>Diet Planner</b></Link></div>
                <div class="level-item"><Link to='/dashboard'>Dashboard</Link></div>
            </div>

            <div class="level-right">
                <div class="level-item"><em class="tag">logged in as {props.user}</em></div>
                <div class="level-item button"><Link to='/' onClick={() => props.setUser('')}>Logout</Link></div>
            </div>
            </>
        )
    }

    return(
        <nav class="level">
        {props.user === '' ? notSignedIn() : signedIn()}
        </nav>
    )
}

export default Header