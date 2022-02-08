import { ACTION_STRING } from 'src/redux/actions/actionString'

export const personalUser = (userData) => {
    const dataPersonal = ACTION_STRING.userData
    return {
        type: dataPersonal,
        payload: { userData }
    }
}