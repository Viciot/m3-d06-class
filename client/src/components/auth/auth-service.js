import axios from 'axios'

const authService = axios.create({
    baseURL: 'http://localhost:5000/auth',
    withCredentials: true
})

function signup(username, email, password){
    return authService.post('/signup', {username, email, password} )
    .then(response => response.data)
}

function login(username, password){
    return authService.post('/login', {username, password})
    .then(res => res.data)
    .catch(err=>console.log(err))
}

function logout(){
    return authService.get('/logout')
    .then(res=>res.data)
}

export { authService, signup, login, logout}

// This form will allow me to import the services into my App with the following "namespace" syntax:
// import * as authService from './ ...'
// then we can use the  functions from the servie in a DOT-NOTATION like auth-service.login()