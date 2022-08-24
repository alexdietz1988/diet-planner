import { useEffect } from "react"

import BasicsUI from "./BasicsUI"
import { requestGetBasics } from '../../apis/backend'

function Basics({ basics, setBasics, setTargets, user}) {

    function getBasics() {
        requestGetBasics(user)
            .then(({ data }) => {
                setBasics({weight: parseInt(data.weight), goal: data.goal, TDEE: parseInt(data.TDEE)})
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

export default Basics