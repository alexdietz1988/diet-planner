import { FETCH_BASICS, EDIT_BASICS } from '../actions/types'

const basicsDefault = {
    data: { weight: '0', goal: 'maintain', TDEE: '0' },
    targets: { calories: '0', protein: '0'},
    fetchCount: 0
}

function basicsReducer(basics = basicsDefault, action) {
    switch (action.type) {
        case FETCH_BASICS:
            if (!action.payload.success) {
                return basics
            } else {
                let data = action.payload.data
                
                let targets = {
                    calories: parseInt(data.TDEE),
                    protein: parseInt(data.weight)
                }
                if (data.goal === 'cut') {
                    targets.calories *= 0.75
                    targets.protein *= 1.1
                } else if (data.goal === 'bulk') {
                    targets.calories *= 1.1
                }

                return { data, targets, fetchCount: basics.fetchCount + 1 }
            }
        case EDIT_BASICS:
            if (!action.payload.success) {
                return basics
            }
            else return {
                ...basics,
                fetchCount: basics.fetchCount + 1
            }
    }
    return basics
}

export default basicsReducer