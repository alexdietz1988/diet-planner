import Submit from "../../components/Submit"

function LoginUI(props) {
    return(
        <>
        <h4 className="title is-4">Login</h4>
        <form onSubmit={props.handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="username">Username</label>
                <div className="control">
                    <input className="input" type="text" name="username" id="username" onChange={props.handleChange} required/>
                </div>
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

export default LoginUI