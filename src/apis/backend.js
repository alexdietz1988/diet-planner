import axios from 'axios'

export const diet = axios.create({
    baseURL: 'https://dietplanner-backend.herokuapp.com/'
})

export function createMeal(username, formData) {
    return diet.post(`meal/?username=${username}`, {username, ...formData})
}

export function editMeal(username, mealId, formData) {
    return diet.put(`meal/?id=${mealId}`, {username, ...formData})
}

export function fetchMeals(user) {
    return diet.get(`meal/?username=${user}`)
}

export function deleteMeal(mealId) {
    return diet.delete(`meal/?id=${mealId}`)
}

export function fetchBasics(user) {
    return diet.get(`basics/?username=${user}`)
}

export function editBasics(username, formData) {
    return diet.put(`basics/?username=${username}`, { username, ...formData })
}