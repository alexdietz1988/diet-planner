import axios from 'axios'

export const diet = axios.create({
    baseURL: 'https://dietplanner-backend.herokuapp.com/'
})

export function requestAddMeal(username, formData) {
    return diet.post(`meal/?username=${username}`, {username, ...formData})
}

export function requestEditMeal(username, mealId, formData) {
    return diet.put(`meal/?id=${mealId}`, {username, ...formData})
}

export function requestGetMeals(user) {
    return diet.get(`meal/?username=${user}`)
}

export function requestDeleteMeal(mealId) {
    return diet.delete(`meal/?id=${mealId}`)
}

export function requestGetBasics(user) {
    return diet.get(`basics/?username=${user}`)
}

export function requestEditBasics(username, formData) {
    return diet.put(`basics/?username=${username}`, { username, ...formData })
}