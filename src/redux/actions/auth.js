import { ACTION_STRING } from './actionString'
import { login } from 'src/modules/auth'

export const loginAction = (body) => {
    const { authLogin } = ACTION_STRING
    return {
        type: authLogin,
        payload: login(body)
    }
}
