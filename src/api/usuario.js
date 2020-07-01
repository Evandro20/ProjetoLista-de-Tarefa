import axios from 'axios'

 export function cadastrar(name, email) {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users',
        {
            fullName: name,
            email: email
        }
    )
}
