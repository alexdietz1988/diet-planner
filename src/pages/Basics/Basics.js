import { useEffect } from 'react'
import { connect } from 'react-redux'

import BasicsUI from './BasicsUI'
import { fetchBasics } from '../../actions/basics'

function Basics({ setBasics, user}) {
    function getBasics() {
        fetchBasics(user)
            .then(({ data }) => {
                setBasics(parseInt(data.weight), data.goal, parseInt(data.TDEE))
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {getBasics()}, [])

    return <BasicsUI />
}

function mapStateToProps(state) {
    return {
        user: state.user,
        basics: state.basics
    }
}

export default connect(mapStateToProps, { fetchBasics })(Basics)