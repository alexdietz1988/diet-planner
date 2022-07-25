import { Link } from "react-router-dom"

function Landing() {
    return(
        <>
        <h1>Diet Planner</h1>
        <p>A simple tool for planning a diet to help you bulk, cut, or maintain.</p>
        <p><Link to="/signup">Signup</Link></p>
        <p>Login</p>
        </>
    )
}

export default Landing