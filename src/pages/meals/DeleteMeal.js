import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Submit from '../../components/Submit'
import { fetchMeal, deleteMeal } from '../../actions/meals'
import { useEffect } from 'react'

function DeleteMeal(props) {
    const navigate = useNavigate()

    let mealId = useParams().id
    useEffect(() => {props.fetchMeal(mealId)}, [])

    function onSubmit() {
        props.deleteMeal(mealId)
        navigate('/your-diet')
    }

    return(
        <section className='section'>
        <h4 className='title is-4'>Are you sure you want to delete &#8220;{props.selectedMeal.name}&#8221;?</h4>
        <form onSubmit={props.handleSubmit(onSubmit)}>
            <Submit submitText='Yes, Delete It' submitColor='is-danger' cancel='/your-diet'/>
        </form>
    </section>
    )
}

function mapStateToProps(state) {
    return {
        selectedMeal: state.meals.selectedMeal
    }
}

DeleteMeal = reduxForm({form: 'deleteMeal'})(DeleteMeal)
export default connect(mapStateToProps, { fetchMeal, deleteMeal })(DeleteMeal)