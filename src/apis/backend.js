import axios from 'axios'

// 'https://dietplanner-backend.herokuapp.com/'

export const diet = axios.create({
    baseURL: 'http://localhost:4000/'
})