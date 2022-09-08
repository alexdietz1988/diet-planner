import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import EditBasicsUI from './EditBasicsUI'
import { requestEditBasics } from '../../apis/backend'

function EditBasics({ user }) {
    let navigate = useNavigate()

    function onSubmit(formValues) {
        requestEditBasics(user, formValues)
            .then(({ data }) => {
                if (data === 'success') navigate('/basics')
            })
            .catch((error) => console.log(error))
    }

    return <EditBasicsUI onSubmit={onSubmit} />
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(EditBasics)