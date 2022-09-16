import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { editBasics } from '../../actions/basics'
import EditBasicsUI from './EditBasicsUI'

function EditBasicsForm(props) {
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)

    function onSubmit(formValues) {
        props.editBasics(formValues)
        setSubmitted(true)
    }
    useEffect(() => {
        if (submitted) {
            navigate('/basics')
        }
    }, [props.fetchCount])

    return (
        <>
        {submitted ?
            <div>Loading...</div> :
            <EditBasicsUI
                initialValues={props.initialValues}
                onSubmit={onSubmit}
            />
        }
        </>
    )
}

function mapStateToProps(state) {
    return { 
        initialValues: state.basics.data,
        fetchCount: state.basics.fetchCount
    }
}

export default connect(mapStateToProps, { editBasics })(EditBasicsForm)