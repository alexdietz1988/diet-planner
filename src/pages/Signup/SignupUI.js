import { Link } from "react-router-dom"

function SignupUI(props) {
    return(
        <>
        <h4 className="title is-4">Signup</h4>
        <form onSubmit={props.handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="username">Username</label>
                <div className="control">
                    <input className="input" type="text" name="username" id="username" onChange={props.handleChange} required/>
                </div>
                {props.userAlreadyExists ? <p className="help is-danger">There's already an account with that username. If it's you, please login; otherwise, enter a different username.</p> : null}
            </div>

            <div className="field">
                <label className="label" htmlFor="password">Password</label>
                <div className="control">
                    <input className="input" type="password" name="password" id="password" onChange={props.handleChange} required/>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <input className="button is-link" type="submit" value="Submit" />
                </div>
                <div className="control">
                    <Link className="button is-light" to='/'>Cancel</Link>
                </div>
            </div>
        </form>
        </>
    )
}

export default SignupUI