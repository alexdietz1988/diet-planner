import axios from "axios"
import { useEffect } from "react"
import DashboardUI from "./BasicsUI"

function Basics(props) {

    function getUserInfo() {
        axios.get(props.backend + 'userinfo/?username=' + props.user)
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

    useEffect(() => {getUserInfo()}, [])

    return <DashboardUI user={props.user} basics={props.basics}/>
}

export default Basics