import axios from "axios"
import { useEffect } from "react"
import BasicsUI from "./BasicsUI"

function Basics(props) {

    function getBasics() {
        axios.get(props.backend + 'basics/?username=' + props.user)
            .then((response) => {
                props.setBasics({weight: parseInt(response.data.weight), goal: response.data.goal, TDEE: parseInt(response.data.TDEE)})
                switch(props.goal) {
                    case 'cut':
                        props.setTargets({calories: props.basics.TDEE * 0.75, protein: props.basics.weight * 1.1})
                        break
                    case 'bulk':
                        props.setTargets({calories: props.basics.TDEE * 1.1, protein: props.basics.weight})
                        break
                    default:
                        props.setTargets({calories: props.basics.TDEE, protein: props.basics.weight})
                }
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {getBasics()}, [])

    return <BasicsUI user={props.user} basics={props.basics}/>
}

export default Basics