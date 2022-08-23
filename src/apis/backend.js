import axios from 'axios'

let backend = 'http://localhost:4000/'

export function postUser(page, formData) {
    axios.post(backend + `auth/${page}`, {
        username: formData.username,
        password: formData.password
    })
        .then((response) => response)
        .catch((error) => console.log(error))
}