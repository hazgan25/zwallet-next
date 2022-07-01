import { ACTION_STRING } from 'src/redux/actions/actionString'
import { personalData } from 'src/modules/utils/users'

export const personalUser = (id, token) => {
    const { userDataPersonal } = ACTION_STRING
    return {
        type: userDataPersonal,
        payload: personalData(id, token)
    }
}