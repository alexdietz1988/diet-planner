function Landing() {
    return(
        <>
        <section class="section content">
            <p>A simple tool for planning a diet to help you <a href="https://www.healthline.com/nutrition/bulking-vs-cutting">bulk, cut, or maintain</a>.</p>
            
        </section>
        <section class="section">
            <p class="content">Targets are calculated using the following formulas:</p>

            <table class="table">
                <thead>
                    <tr>
                        <th>Diet</th>
                        <th>Calories</th>
                        <th>Protein (g)</th>
                    </tr>
                </thead>
                <tr>
                    <td>Cut</td>
                    <td>TDEE x 0.75</td>
                    <td>Weight (lbs) x 1.1</td>
                </tr>
                <tr>
                    <td>Bulk</td>
                    <td>TDEE x 1.1</td>
                    <td>Weight (lbs) x 1</td>
                </tr>
                <tr>
                    <td>Maintain</td>
                    <td>TDEE x 1</td>
                    <td>Weight (lbs) x 1</td>
                </tr>
            </table>

        </section>
        <section class="section content">
            <p>Created by <a href="https://alexdietz.herokuapp.com/">Alex Dietz</a> using React.</p>
            <p class="is-size-7">Icon: <a href="https://www.flaticon.com/free-icons/avocado" title="avocado icons">Freepik on Flaticon</a></p>
        </section>
        </>
    )
}

export default Landing