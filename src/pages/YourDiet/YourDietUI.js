import TableFooter from "./YourDietUIComponents.js/TableFooter"
import Analysis from "./YourDietUIComponents.js/Analysis"
import TableTop from "./YourDietUIComponents.js/TableTop"

function YourDietUI(props) {

    return (
        <section className="section">
            <h4 className="title is-4">Your diet</h4>

            <table className="table">
                <TableTop meals={props.meals} deleteMeal={props.deleteMeal}/>
                <TableFooter dietTotals={props.dietTotals}/>
            </table>

            <Analysis dietTotals={props.dietTotals} />
        </section>
    )
}

export default YourDietUI