import TableFooter from "./TableFooter"
import Analysis from "./Analysis"
import TableTop from "./TableTop"

function YourDietUI({ meals, setMeal, deleteMeal, diet, targets}) {

    return (
        <section className="section">
            <h4 className="title is-4">Your diet</h4>

            <table className="table">
                <TableTop meals={meals} setMeal={setMeal} deleteMeal={deleteMeal}/>
                <TableFooter diet={diet} targets={targets}/>
            </table>

            <Analysis dietTotals={props.dietTotals} targets={props.targets}/>
        </section>
    )
}

export default YourDietUI