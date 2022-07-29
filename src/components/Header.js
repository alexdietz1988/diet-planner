import { Link } from "react-router-dom"

function Header(props) {

    function notSignedIn() {
        return(
            <>
            <div class="navbar-brand">
                <Link class="navbar-item" to='/'><b>Diet Planner</b></Link>
            </div>
            
            <div class="navbar-menu">
                <Link class="navbar-item" to='/signup'>Signup</Link>
                <Link class="navbar-item" to='/login'>Login</Link>
            </div>
            </>
        )
    }

    function signedIn() {
        return(
            <>
            <div class="navbar-brand">
                <Link class="navbar-item" to='/'><b>Diet Planner</b></Link>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                <Link class="navbar-item" to='/dashboard'>Dashboard</Link>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item"><Link to='/' onClick={() => props.setUser('')}>Logout</Link></div>
                    <div class="navbar-item">Logged in as {props.user}</div>
                </div>
            </div>
            </>
        )
    }

    return(
        <nav class="navbar">
        {props.user === '' ? notSignedIn() : signedIn()}
        </nav>
    )
}

export default Header