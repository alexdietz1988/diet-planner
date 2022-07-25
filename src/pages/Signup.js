function Signup() {
    return(
        <>
        <h2>Signup</h2>
        <form>
            <div>
                <label for="text">Username</label>
                <input type="text" name="username"/>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" name="password"/>
            </div>
        </form>
        </>
    )
}

export default Signup