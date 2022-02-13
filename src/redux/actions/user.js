import { ACTION_STRING } from 'src/redux/actions/actionString'
import { personalData, searchReceiverUser } from 'src/modules/utils/users'

export const personalUser = (id, token) => {
    const { userDataPersonal } = ACTION_STRING
    return {
        type: userDataPersonal,
        payload: personalData(id, token)
    }
}

export const searchReceiverAction = (param, token) => {
    const { searchReceiver } = ACTION_STRING
    return {
        type: searchReceiver,
        payload: searchReceiverUser(param, token)
    }
}