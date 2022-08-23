import axios from "axios"
import { useEffect } from "react"
import { connect } from "react-redux"

import BasicsUI from "./BasicsUI"

function Basics({ backend, basics, setBasics, setTargets, user, goal }) {

    function getBasics() {
        axios.get(backend + `basics/?username=${user}`)
            .then((response) => {
                setBasics({weight: parseInt(response.data.weight), goal: response.data.goal, TDEE: parseInt(response.data.TDEE)})
                switch(goal) {
                    case 'cut':
                        setTargets({calories: basics.TDEE * 0.75, protein: basics.weight * 1.1})
                        break
                    case 'bulk':
                        setTargets({calories: basics.TDEE * 1.1, protein: basics.weight})
                        break
                    default:
                        setTargets({calories: basics.TDEE, protein: basics.weight})
                }
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {getBasics()}, [])

    return <BasicsUI user={user} basics={basics}/>
}

function mapStateToProps(state) {
    return({
        user: state.user
    })
}

export default connect(mapStateToProps)(Basics)