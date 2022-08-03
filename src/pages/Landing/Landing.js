import FormulaTable from "./FormulaTable"

function Landing() {
    return(
        <>
        <section className="section content">
            <p>A simple tool for planning a diet to help you <a href="https://www.healthline.com/nutrition/bulking-vs-cutting">bulk, cut, or maintain</a>.</p>
            
        </section>
        <section className="section">
            <p className="content">Targets are calculated using the following formulas:</p>
            <FormulaTable />
        </section>
        <section className="section content">
            <p>Created by <a href="https://alexdietz.herokuapp.com/">Alex Dietz</a> using React.</p>
            <p className="is-size-7">Icon: <a href="https://www.flaticon.com/free-icons/avocado" title="avocado icons">Freepik on Flaticon</a></p>
        </section>
        </>
    )
}

export default Landing