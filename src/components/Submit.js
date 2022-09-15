import { Link } from 'react-router-dom'

function Submit(props) {
    let submitColor = props.submitColor ? props.submitColor : 'is-link'

    return(
        <div className='field is-grouped'>
            <div className='control'>
                <input className={`button ${submitColor}`} type='submit' value={props.submitText}/>
            </div>
            <div className='control'>
                <Link className='button is-light' to={props.cancel}>Cancel</Link>
            </div>
        </div>
    )
}

export default Submit