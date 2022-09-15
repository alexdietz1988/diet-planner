import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { editBasics } from '../../actions/basics'
import EditBasicsUI from './EditBasicsUI'

function EditBasicsForm(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function onSubmit(formValues) {
        dispatch(props.editBasics(formValues))
        navigate('/basics')
    }

    return <EditBasicsUI initialValues={props.initialValues} onSubmit={onSubmit} />
}

function mapStateToProps(state) {
    return { initialValues: state.basics.data }
}

export default connect(mapStateToProps, { editBasics })(EditBasicsForm)