import axios from 'axios'

const backend = 'https://dietplanner-backend.herokuapp.com/'

export function requestLogin(page, formData) {
    return axios.post(backend + `auth/${page}`, {
        username: formData.username,
        password: formData.password
    })
}

export function requestAddMeal(user, formData) {
    return axios.post(backend + `meal/?username=${user}`, {
        username: user,
        name: formData.name,
        calories: formData.calories,
        protein: formData.protein
})
}

export function requestEditMeal(user, mealId, formData) {
    return axios.put(backend + `meal/?id=${mealId}`, {
        username: user,
        name: formData.name,
        calories: formData.calories,
        protein: formData.protein
    })
}

export function requestGetMeals(user) {
    return axios.get(backend + `meal/?username=${user}`)
}

export function requestDeleteMeal(mealId) {
    return axios.delete(backend + `meal/?id=${mealId}`)
}

export function requestGetBasics(user) {
    return axios.get(backend + `basics/?username=${user}`)
}

export function requestEditBasics(user, formData) {
    return axios.put(backend + `basics/?username=${user}`, {
        username: user,
        weight: formData.weight,
        goal: formData.goal,
        TDEE: formData.TDEE
    })
}