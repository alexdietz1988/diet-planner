import TableFooter from "./TableFooter"
import Analysis from "./Analysis"
import TableTop from "./TableTop"

function YourDietUI(props) {

    return (
        <section className="section">
            <h4 className="title is-4">Your diet</h4>

            <table className="table">
                <TableTop meals={props.meals} setMeal={props.setMeal} deleteMeal={props.deleteMeal}/>
                <TableFooter targets={props.targets} dietTotals={props.dietTotals}/>
            </table>

            <Analysis dietTotals={props.dietTotals} targets={props.targets}/>
        </section>
    )
}

export default YourDietUI