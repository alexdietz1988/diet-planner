import Submit from "./Submit"

function AuthForm(props) {
    return(
        <>
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

            <Submit cancel="/"/>
        </form>

        {props.invalidEntry ? <p>Invalid username or password.</p> : null}
        </>
    )
}

export default AuthForm