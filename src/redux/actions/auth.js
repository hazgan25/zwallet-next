import { ACTION_STRING } from './actionString'
import { login } from 'src/modules/utils/auth'

export const loginAction = (body) => {
    const { authLogin } = ACTION_STRING
    return {
        type: authLogin,
        payload: login(body)
    }
}

export const logoutAction = () => {
    const { authLogout } = ACTION_STRING
    return {
        type: authLogout
    }
}
