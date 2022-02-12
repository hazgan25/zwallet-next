import { ACTION_STRING } from 'src/redux/actions/actionString'
import { historyTransaction } from 'src/modules/utils/transactions'

export const historyAction = (id, token) => {
    const { historyTransactionPersonal } = ACTION_STRING
    return {
        type: historyTransactionPersonal,
        payload: historyTransaction(id, token)
    }
}