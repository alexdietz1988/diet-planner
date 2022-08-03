import { Link } from "react-router-dom"

function BasicsUI(props) {
    return(
        <section className="section">
            <h4 className="title is-4">Basics</h4>
            
            <div className="content">
                <p>You weigh <b>{props.basics.weight}</b> pounds.</p>
                <p>You burn <b>{props.basics.TDEE}</b> calories per day.</p>
                <p>Your current goal is to <b>{props.basics.goal}</b>.</p>
            </div>
            
            <Link to='/edit-basics'><button className="button is-warning">Update</button></Link>
        </section>
    )
}

export default BasicsUI