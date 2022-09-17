import axios from 'axios'

export const diet = axios.create({
    baseURL: 'https://dietplanner-backend.herokuapp.com/'
})