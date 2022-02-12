import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_HOST

export const register = (body) => {
    const urlRegister = URL + '/auth/register'
    return axios.post(urlRegister, body)
}

export const login = (body) => {
    const urlLogin = URL + '/auth/login';
    return axios.post(urlLogin, body)
}

export const logout = (token) => {
    const urlLogout = URL + '/logout'
    return axios.post(urlLogout, { headers: { Authorization: `Bearer ${token}` } })
}
