export function setUser(user) {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export function setBasics(data) {
    return {
        type: 'SET_BASICS',
        payload: {
            weight: data.weight,
            goal: data.goal,
            TDEE: data.TDEE
        }
    }
}

// const [basics, setBasics] = useState({weight: 0, goal: 'maintain', TDEE: 0})