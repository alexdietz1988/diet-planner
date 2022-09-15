import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import EditBasicsUI from './EditBasicsUI'
import { editBasics } from '../../actions/basics'

function EditBasics() {
    let navigate = useNavigate()

    function onSubmit(formValues) {
        editBasics(formValues)
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