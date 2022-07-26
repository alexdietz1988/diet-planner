import axios from "axios"
import { useState, useEffect } from "react"
import EditUserInfo from "./EditUserInfo"

function UserHome(props) {

    const [weight, setWeight] = useState('')
    const [goal, setGoal] = useState('')

    function getUserInfo() {
        axios.get(props.backend + 'userinfo/?username=' + props.user)
            .then((response) => {
                setWeight(response.data.weight)
                setGoal(response.data.goal)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {getUserInfo()}, [])

    return(
        <>
            <p><em>Logged in as {props.user}</em></p>
            <p><b>Your weight:</b> {weight}</p>
            <p><b>Your goal:</b> {goal}</p>

            Edit your weight and goal
            <EditUserInfo backend={props.backend} user={props.user} setWeight={setWeight} setGoal={setGoal}/>

            <p>Your diet</p>
        </>
    )
}

export default UserHome