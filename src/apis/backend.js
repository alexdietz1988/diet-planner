import axios from 'axios'

const backend = 'http://localhost:4000/'

export function requestLogin(page, formData) {
    axios.post(backend + `auth/${page}`, {
        username: formData.username,
        password: formData.password
    })
}

export function requestAddMeal(user, formData) {
    axios.post(backend + `meal/?username=${user}`, {
    username: user,
    name: formData.name,
    calories: formData.calories,
    protein: formData.protein
})
}

export function requestEditMeal(user, mealId, formData) {
    axios.put(backend + `meal/?id=${mealId}`, {
        username: user,
        name: formData.name,
        calories: formData.calories,
        protein: formData.protein
    })
}

export function requestGetMeals(user) {
    axios.get(backend + `meal/?username=${user}`)
}

export function requestDeleteMeal(mealId) {
    axios.delete(backend + `meal/?id=${mealId}`)
}

export function requestGetBasics(user) {
    axios.get(backend + `basics/?username=${user}`)
}

export function requestEditBasics(user) {
    axios.put(backend + `basics/?username=${user}`, {
        username: user,
        weight: formData.weight,
        goal: formData.goal,
        TDEE: formData.TDEE
    })
}