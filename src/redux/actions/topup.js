import { ACTION_STRING } from './actionString'
import { topUpTransaction } from 'src/modules/utils/transactions'

export const topUpAction = (id, token) => {
    const { topUp } = ACTION_STRING
    return {
        type: topUp,
        payload: topUpTransaction(id, token)
    }
}