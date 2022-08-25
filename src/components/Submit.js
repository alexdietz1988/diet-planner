import { Link } from 'react-router-dom'

function Submit({ cancel }) {
    return(
        <div className='field is-grouped'>
                <div className='control'>
                    <input className='button is-link' type='submit' value='Submit' />
                </div>
                <div className='control'>
                    <Link className='button is-light' to={cancel}>Cancel</Link>
                </div>
        </div>
    )
}

export default Submit