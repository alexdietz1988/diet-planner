import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import EditBasicsUI from './EditBasicsUI'
import { editBasics } from '../../actions/basics'

function EditBasics() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function onSubmit(formValues) {
        dispatch(editBasics(formValues))
        navigate('/basics')
    }

    return <EditBasicsUI onSubmit={onSubmit} />
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { editBasics })(EditBasics)