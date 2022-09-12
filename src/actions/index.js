import { LOGIN, LOGOUT, SET_BASICS, FETCH_MEALS, SELECT_MEAL } from './types'
import { diet } from '../apis/backend'

export const login = (page, formData) => async (dispatch) => {
    const response = await diet.post(`auth/${page}`, formData)
    console.log(response)
    let payload
    
    if (['invalid username or password', 'user already exists'].includes(response.data)) {
        payload = { "warning": response.data }
    } else if (response.data === 'success') {
        payload = { "user": formData.username }
    } else payload = { "warning": response }

    dispatch({ type: LOGIN, payload})
}


export const logout = () => {
    return { type: LOGOUT }
}

export function setBasics(weight, goal, TDEE) {
    let [targetCalories, targetProtein] = [parseInt(TDEE), parseInt(weight)]
    
    if (goal === 'cut') {
        targetCalories *= 0.75
        targetProtein *= 1.1
    
    } else if (goal === 'bulk') targetCalories *= 1.1

    return {
        type: SET_BASICS,
        payload: {weight, goal, TDEE, targetCalories, targetProtein}
    }
}

export function setDiet(meals) {
    let [calories, protein] = [0,0]
    for (let meal of meals) {
        calories += parseInt(meal.calories)
        protein += parseInt(meal.protein)
    }

    return {
        type: FETCH_MEALS,
        payload: {meals, calories, protein}
    }
}

export function selectMeal(meal) {
    return {
        type: SELECT_MEAL,
        payload: meal
    }
}