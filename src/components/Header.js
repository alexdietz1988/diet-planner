import { Link } from "react-router-dom"

function Header(props) {
    return(
        <nav class="navbar">
            <div class="navbar-brand">
                <Link class="navbar-item" to='/dashboard'><b>Diet Planner</b></Link>

                {props.user === '' ? 
                    <>
                        <Link class="navbar-item" to='/signup'>Signup</Link>
                        <Link class="navbar-item" to='/login'>Login</Link>
                    </>
                    : <>
                        <Link class="navbar-item button is-small" to='/dashboard'>Dashboard</Link>
                        <button class="navbar-item button is-small is-light" onClick={props.logout}>Logout</button>
                        <em>Logged in as {props.user}</em></>}
            </div>
        </nav>
    )
}

export default Header